var questionData;
var dataObject;
var recommendation = {}
var suitable = true;
var toggleAccordion = false; //false indicates accordion is closed
toggleRecalculate = 0;  // 0 indicates the button is enabled

$('document').ready(function () {
    if (sessionStorage['questionData']) {
        questionData = JSON.parse(sessionStorage['questionData']);

        var valueArray = [];
        $.each(questionData, function (index, value) {
            if (index > 2) return false;
            valueArray.push(value['value']);
        });
        if (!(valueArray.indexOf(1) > -1)) {
            suitable = false;
        }
        if (suitable) {
            dataObject = createDataObject(questionData);
            recommendation = calcResult(dataObject);
            recommendation['suitable'] = true;
        } else {
            recommendation['heading'] = "Looks like we have everything we need!"
            recommendation['suitable'] = false;
            recommendation['standard'] = 'Server Essentials';
            recommendation['image'] = 'essentials';

        }
        var newTemplate = nunjucks.render('../_partials/results-template.html', recommendation);
        $('.results').html(newTemplate);

        var accordionTemplate =  nunjucks.render('../_partials/accordion.html',{data: questionData, suitable : recommendation['suitable']});
        $('.explore-section').html(accordionTemplate);

        if(!recommendation['suitable']){
            $('.results').addClass('not-suitable');
        }

    }
});


function createDataObject(data) {
    var tempObject = {};
    $.each(data, function (index, value) {
        if (value['type'] == 'radio' && value['variable']) {
            tempObject[value['variable']] = Boolean(value['value']);
        } else if (value['variable']) {
            tempObject[value['variable']] = value['value'];
        }
        if (value['subQuestions'].length) {
            $.each(value['subQuestions'], function (ind, val) {
                tempObject[val['variable']] = val['value'];
            })
        }
    });
    return tempObject;
}

function calcResult(input) {
    var tempVars = {};
    var result = {};
    tempVars['N'] = input['B'] * input['C'];
    tempVars['O'] = Math.max(16, tempVars['N']);
    tempVars['P'] = tempVars['O'] * input['A'];
    tempVars['Q'] = input['A'] * 2;
    tempVars['R'] = Math.max(0, (input['D'] - tempVars['Q']));
    tempVars['S'] = Math.ceil(tempVars['R'] / 2);
    tempVars['T'] = tempVars['S'] * tempVars['O'];
    tempVars['U'] = tempVars['P'] + tempVars['T'];
    tempVars['V'] = tempVars['P'];
    tempVars['W'] = (input['E'] - input['F']) < 1 ? "User" : "Device";
    tempVars['X'] = Math.min(input['E'], input['F']);
    tempVars['Y'] = (input['G'] - input['H']) < 1 ? "User" : "Device";;
    tempVars['Z'] = Math.min(input['G'], input['H']);

    var standard = (tempVars['U'] / 5 - tempVars['V']) <= 0 ? "Server Standard" : "Server DataCenter"; // Tells the standard

    var image = (standard == 'Server Standard') ? 'standard' : 'datacenter';

    var CL = (standard == 'Server Standard') ? tempVars['U'] : tempVars['V'];

    var CAL = tempVars['X'] + ' ' + tempVars['W'] + " CAL's";

    var RCAL = tempVars['Z'] + ' Remote Desktop ' + tempVars['Y'] + " CAL's";

    result['heading'] = "Based on the answers, you need";
    result['CL_count'] = CL;
    result['CL_type'] = 'Cores of licensing';
    result['CAL_count'] = tempVars['X'];
    result['CAL_type'] = tempVars['W'];
    result['RCAL_count'] = tempVars['Z'];
    result['RCAL_type'] = 'Remote Desktop ' + tempVars['W'];
    result['standard'] = standard;
    result['image'] = image;

    return result;
  }

function accordion(){
    toggleAccordion = !toggleAccordion;
    if(toggleAccordion){
        $('.recalculate-button--link').removeClass('display-none');
        $('.accordion-content').removeClass('display-none');
        $('.plus').attr('src','../assets/images/Icon_Minus.png')
    }else{
    $('.recalculate-button--link').addClass('display-none');
    $('.accordion-content').addClass('display-none');
    $('.plus').attr('src','../assets/images/Icon_Plus.png')
    }
}

function sheduleACall() {
    var requestUrl;
    if(suitable){
        var extras = (dataObject.I ? "1," : "") + (dataObject.J ? "2," : "") + (dataObject.K ? "3," : "")
        extras = extras.slice(0, -1); // removing last coma
        requestUrl = "https://calendly.com/trusted-tech-team-licensing-engineer/15-min-windows-server-call-calc?a2="
            + dataObject.A + "&a3=" + dataObject.B + "&a4=" + dataObject.C + "&a5=" + dataObject.E + "&a6="
            + dataObject.F + "&a7=" + dataObject.G + "&a8=" + dataObject.H + "&a9=" + dataObject.D + "&a10="
            + extras
    }else{
        requestUrl = "https://calendly.com/trusted-tech-team-licensing-engineer/15-min-windows-server-call-calc?a2=0&a3=0&a4=0&a5=0&a6=0&a7=0&a8=0&a9=0&a10"
    }
    Calendly.showPopupWidget(requestUrl);
    return false;
}

function toggleInputs(element){
    var name = element.getAttribute("name");
    if(Number(element.value)){
        $("input[dependent=" + name +"]").attr('disabled',false);
        dataObject[name] = true;
        var elements = $("input[dependent=" + name +"]");
        $.each(elements,function(index,val){
            if(val.value == ""){
                toggleRecalculate++;
                if(!toggleRecalculate){
                    $('.recalculate-button--link').removeClass('button-disabled');
                }else{
                    $('.recalculate-button--link').addClass('button-disabled');
                }
            }
        })
    }else{
        $("input[dependent=" + name +"]").attr('disabled','disabled');
        var elements = $("input[dependent=" + name +"]");
        $.each(elements,function(index,val){
            if(val.value == ""){
                toggleRecalculate--;
                if(!toggleRecalculate){
                    $('.recalculate-button--link').removeClass('button-disabled');
                }else{
                    $('.recalculate-button--link').addClass('button-disabled');
                }
            }
        })
        dataObject[name] = false;
    }   
}

function restartCalc(){
    if (sessionStorage['questionData']) {
        sessionStorage.removeItem('questionData')
    }
    $(location).attr('href', '../questionary');
}

function recalculate(){
    var suitable = true;
    $.each(dataObject,function(key,val){
        var value ;
        if($('input[name=' + key + ']').attr('type') == 'text'){
            if($('input[name=' + key + ']').val() != "")
                value = Number($('input[name=' + key + ']').val());
            else
                value = ""
            dataObject[key] = value;
        }  
    });
    dataObject = formatDataObject(dataObject);
    var canRecalculate = validateDataObject(dataObject);
    if(canRecalculate){
        if(!dataObject['users'] && !dataObject['virtualize'] && !dataObject['remoteAccess'] )
            suitable = false;
        if(suitable){
            recommendation = calcResult(dataObject);
            recommendation['suitable'] = true;
        }else{
            recommendation['heading'] = "Looks like we have everything we need!"
            recommendation['suitable'] = false;
            recommendation['standard'] = 'Server Essentials';
            recommendation['image'] = 'essentials';
            var accordionTemplate =  nunjucks.render('../_partials/accordion.html',{data: questionData, suitable : recommendation['suitable']});
            $('.explore-section').html(accordionTemplate);
        }
        var newTemplate = nunjucks.render('../_partials/results-template.html', recommendation);
        $('.results').html(newTemplate);
        
        updateStorage(dataObject);
        sessionStorage['questionData'] = JSON.stringify(questionData);
        $("html, body").animate({ scrollTop: 100 }, "slow");;
    }
    
}

function formatDataObject(data){
    if(!data['users']){
        data['E'] = 0;
        data['F'] = 0;
    }
    if(!data['remoteAccess']){
        data['G'] = 0;
        data['H'] = 0;
    }
    return data;
}

function updateStorage(data){
    var variable;
    $.each(questionData,function(index,value){
        if(value['variable']){
            variable = value['variable'];
            if(value['type']== 'radio'){
                value['value'] = Number(data[variable]);
            }else{
                value['value'] = data[variable];
            }
        }
        if(value['subQuestions']){
            $.each(value['subQuestions'],function(ind,val){
                if(val['variable']){
                    variable = val['variable'];
                    val['value'] = data[variable];
                }
            })
        }
    })
}


function validateDataObject(data){
    var boolean = true;
    $.each(data,function(index,value){
        if(value === ""){
            boolean = false;
            return false;
        }
    })
    return boolean;
}

function toggleRecalc(element){
    if(!element.value){
        $('.recalculate-button--link').addClass('button-disabled');
        toggleRecalculate++;
    }else{
        toggleRecalculate--;
        if(!toggleRecalculate){
            $('.recalculate-button--link').removeClass('button-disabled');
        }
    }
}
