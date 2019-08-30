var questions = {
    "data" : [
        {
            "id" : 1,
            "question" : "Will you have more than 25 users?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "users",
            "variable" : "users",
            "computeResult" : false,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "users-yes"
                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "users-no"
                }
            ],
            "subQuestions" : [],
            "dependency" : 6,
            "value" : "",
            "placeholder" : "",
            "info" : false,
            "infoText" : "",
            "isPreviousQuestion": false,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 2,
            "question" : "Are you looking to virtualize?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "virtualize",
            "variable" : "virtualize",
            "computeResult" : false,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "virtualize-yes"

                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "virtualize-no"
                }
            ],
            "subQuestions" : [],
            "dependency" : "",
            "value" : "",
            "placeholder" : "",
            "info" : true,
            "infoText" : "Virtualization would include setting up a virtual server through Hyper-V or another platform.",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 3,
            "question" : "Will any users need remote access?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "remoteAccess",
            "variable" : "remoteAccess",
            "computeResult" : true,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "remoteAccess-yes"

                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "remoteAccess-no"

                }
            ],
            "subQuestions" : [],
            "dependency" : 7,
            "value" : "",
            "placeholder" : "",
            "info" : true,
            "infoText" : "Remote access provides the ability to take control of the keyboard and mouse of another computer.",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 4,
            "question" : "How many physical hosts do you have?",
            "type": "text",
            "isAnswered": false,
            "isRequired": true,
            "name" : "hosts",
            "variable" : "A",
            "computeResult" : false,
            "options" : [],
            "subQuestions" : [
                {
                    "type": "text",
                    "question": "How many CPUs per physical host?",
                    "value": "",
                    "id" : "subQues_1",
                    "placeholder": "#",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : true,
                    "variable" : "B",
                    "infoText" : "The number of physical CPUs/processors installed in each server (e.g., a server with 2 Intel Xeon 8180 processors has 2 CPUs)"
                },
                {
                    "type": "text",
                    "question": "How many cores per CPU?",
                    "value": "",
                    "id" : "subQues_2",
                    "placeholder": "#",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : true,
                    "variable" : "C",
                    "infoText" : "Every CPU/processor manufactured has a set number of cores (e.g., an Intel Core i7-10700K has 8 cores)"
                }
            ],
            "dependency" : "",
            "value" : "",
            "placeholder" : "Enter total physical hosts",
            "info" : true,
            "infoText" : "The number of physical servers you have (e.g., 3 Dell T140 PowerEdge servers)",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 5,
            "question" : "How many VMs/OSes are required?",
            "type": "text",
            "isAnswered": false,
            "isRequired": true,
            "name" : "vm-os",
            "variable" : "D",
            "computeResult" : false,
            "options" : [],
            "subQuestions" : [],
            "dependency" : "",
            "value" : "",
            "placeholder" : "Enter total VMs/OSes",
            "info" : true,
            "infoText" : "This is the number of Virtual Machines / Containers you are planning setup among all of the physical servers.",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 6,
            "question" : "Client Licensing needs (CALs)",
            "type": "",
            "isAnswered": false,
            "isRequired": true,
            "name" : "authentication",
            "computeResult" : false,
            "options" : [],
            "subQuestions" : [
                {
                    "type": "text",
                    "question": "How many authenticating users?",
                    "value": "",
                    "id" : "subQues_1",
                    "placeholder": "#",
                    "variable" : "E",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : true,
                    "infoText" : "Users are defined as unique people, like Joe, Tim, or Stacy. Examples of authentication include Active Directory, saving and retrieving documents, storing a program database, etc."
                },
                {
                    "type": "text",
                    "question": "How many authenticating devices?",
                    "value": "",
                    "id" : "subQues_2",
                    "placeholder": "#",
                    "variable" : "F",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : true,
                    "infoText" : "Devices are defined as unique computers, tablets, or printers, like a reception computer or warehouse tablet. Examples of authentication include Active Directory, saving &amp; retrieving documents, storing a program database, etc."
                }
            ],
            "dependency" : "",
            "value" : 0,
            "placeholder" : "",
            "info" : false,
            "infoText" : "",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": 1,
        },
        {
            "id" : 7,
            "question" : "Remote Licensing needs (RDS)",
            "type": "",
            "isAnswered": false,
            "isRequired": true,
            "name" : "remote",
            "computeResult" : false,
            "options" : [],
            "subQuestions" : [
                {
                    "type": "text",
                    "question": "How many remote users?",
                    "value": "",
                    "id" : "subQues_1",
                    "placeholder": "#",
                    "variable" : "G",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : false,
                    "infoText" : ""
                },
                {
                    "type": "text",
                    "question": "How many remote devices?",
                    "value": "",
                    "id" : "subQues_2",
                    "placeholder": "#",
                    "variable" : "H",
                    "isRequired": true,
                    "isAnswered": false,
                    "info" : false,
                    "infoText" : ""
                }
            ],
            "dependency" : "",
            "value" : 0,
            "placeholder" : "",
            "info" : false,
            "infoText" : "",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": 3
        },
        {
            "id" : 8,
            "question" : "Do you need downgrade rights?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "downgrade",
            "variable" : "I",
            "computeResult" : false,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "downgrade-yes"

                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "downgrade-no"
                }
            ],
            "subQuestions" : [],
            "dependency" : "",
            "value" : "",
            "placeholder" : "",
            "info" : true,
            "infoText" : "Downgrade rights are the ability to install a prior version (year) of Windows Server.",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 9,
            "question" : "Are you looking to utilize active/passive redundancy?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "redundancy",
            "variable" : "J",
            "computeResult" : false,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "redundancy-yes"

                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "redundancy-no"

                }
            ],
            "subQuestions" : [],
            "dependency" : "",
            "value" : "",
            "placeholder" : "",
            "info" : false,
            "infoText" : "",
            "isPreviousQuestion": true,
            "isNextQuestion": true,
            "dependencyQuestion": ""
        },
        {
            "id" : 10,
            "question" : "Will you be installing on a virtual server cluster such as ESXi, XenServer, etc.?",
            "type": "radio",
            "isAnswered": false,
            "isRequired": true,
            "name" : "virtual-server",
            "variable" : "K",
            "computeResult" : true,
            "options" : [
                {
                    "label" : "Yes",
                    "value" : 1,
                    "id" : "virtual-server-yes"

                },
                {
                    "label" : "No",
                    "value" : 0,
                    "id" : "virtual-server-no"

                }
            ],
            "subQuestions" : [],
            "dependency" : "",
            "value" : "",
            "placeholder" : "",
            "info" : false,
            "infoText" : "",
            "isPreviousQuestion": true,
            "isNextQuestion": false,
            "dependencyQuestion": ""
        }
    ],
    
}

var numberOfQues = questions.data.length;
var unitValue = 100/numberOfQues;
var initialQues = 0;
var numberOfBlocks = numberOfQues; //This field is used because of the depedency questions
var answeredCount = initialQues;

$('document').ready(function(){
    setJSON();
    setInitialQues();
    renderTemplate();
    extendProgressBar();   
    displayQuestion();
})

function setJSON(){
    if(sessionStorage['questionData']){
        questions.data = JSON.parse(sessionStorage['questionData']);
    }else{
        sessionStorage.setItem('questionData', JSON.stringify(questions.data));
    }
}

function setInitialQues(){
    $.each(questions.data,function(index,value){
        if(!value.isAnswered){
            initialQues = index;
            return false;
        }
        if(index == (numberOfQues-1)){
            initialQues = numberOfQues;
        }
    });
    if(initialQues){
        initialQues--
    }
}

function renderTemplate(){
    var newTemplate = nunjucks.render('../_partials/template.html',{ "questionData" : questions.data });
    $('.main').html(newTemplate);
}

function extendProgressBar(){
    var viewPort = parseFloat($('.progress-bar-parent').css('width'))
    var progressBar = parseFloat($('.progress__bar').css('width'));

    extendValue = (viewPort - progressBar)/numberOfBlocks // Remaining width to fill;
    extendedTill = progressBar + extendValue;
    $('.progress__bar').animate({ width : extendedTill + 'px'});
}

function decraeseProgressBar(){
    console.log($('.progress__bar').css('width'))
    var progressBar = parseFloat($('.progress__bar').css('width'));
    var decreaseWidth = progressBar/(answeredCount+1);
    var decreaseTill = progressBar - decreaseWidth;
    $('.progress__bar').animate({ width : decreaseTill + 'px'});
}

function displayQuestion(){
    var width = parseInt($('.question-container').css('width'));
    if(initialQues == 0){
        $('.previous').addClass('display-none')
    }
    if(initialQues == numberOfQues-1){
        $('.next').html('Finish')
    }  

    $('.question-container').css('transition',"unset");
    $('.question-container').css('transform','translate(' + (initialQues * (-width)) + 'px,0)');
    setTimeout(function(){
        $('.question-container').css('transition',"transform 0.2s  ease-in");
    })
    
}

function onNext(){
    var changeQuestion;

    var widthConatiner = parseInt($('.question-container').css('width'));

    sessionStorage['questionData'] = JSON.stringify(questions.data);

    if(questions.data[initialQues]['isAnswered'] === false){
        changeQuestion = false;
    }else{
        changeQuestion = true;
    }

    if(changeQuestion){
        setIsAnsweredOfDependentQues();
        if(questions.data[initialQues]['computeResult']){
            computeResult();
        }
        initialQues++;
        answeredCount++;
        numberOfBlocks--;
        if(initialQues){
            $('.previous').removeClass('display-none')
        }
        if(initialQues < numberOfQues){
            checkAndHideDependent(initialQues,'next');
        }
        extendProgressBar();   
        $('.question-container').css('transform','translate(' + (initialQues * (-widthConatiner)) + 'px,0)')
        if(initialQues == numberOfQues-1){
            $('.next').html('Finish')
        }
    }
}

function checkAndHideDependent(index,action){
    if(questions.data[index]['dependencyQuestion']){
        var indexOfParentQues = questions.data[index]['dependencyQuestion'] - 1;
        var value = questions.data[indexOfParentQues]['value'];
        if(!value && action == 'next'){
            initialQues++;
            checkAndHideDependent(index+1,'next');
        }else if( !value && action == 'back'){
            initialQues--;
            checkAndHideDependent(index-1,'back');

        }
    } 
}

function setIsAnsweredOfDependentQues(){
    if(questions.data[initialQues]['dependency'] && questions.data[initialQues]['value'] == 0){
        var indexOfDependentQues = questions.data[initialQues]['dependency'] - 1;
        questions.data[indexOfDependentQues]['isAnswered'] = true;
        questions.data[indexOfDependentQues]['value'] = 0;
        $.each(questions.data[indexOfDependentQues]['subQuestions'],function(index,value){
            value['value'] = 0;
        })
    }
}

function onBack(){
    var width = parseInt($('.question-container').css('width'));
    if(initialQues != 0){

        initialQues--;
        numberOfBlocks++;
        if(!initialQues)
            $('.previous').addClass('display-none')
        checkAndHideDependent(initialQues,'back');
        decraeseProgressBar();
        answeredCount--;
        $('.question-container').css('transform','translate(' + (initialQues * (-width)) + 'px,0)')
        if(initialQues != numberOfQues-1){
            $('.next').html('Next')
        }        
    }
    
}

function setRadiovalue(ele){
    questions.data[initialQues]['isAnswered'] = true;
    questions.data[initialQues]['value'] = Number(ele.value);
    $('#' + (initialQues+1)).find(".next").removeClass('button-disabled');

    if(questions.data[initialQues]['dependency']  ){
        var dependentQues = questions.data[initialQues]['dependency'] -1;
        if(!questions.data[initialQues]['value']){
            $('.question-block').slice(dependentQues,dependentQues+1).addClass('display');
            // $('.question-block').slice(dependentQues,dependentQues+1).remove();
            numberOfBlocks--; 
        }else{
            if($('.question-block').slice(dependentQues,dependentQues+1).hasClass('display')){
                $('.question-block').slice(dependentQues,dependentQues+1).removeClass('display');
                numberOfBlocks++;
            }
        }
    }

}

function computeResult(){
    if(initialQues == numberOfQues - 1){
        $(location).attr('href', '../results');
    }else{
        var valueArray = [];
        $.each(questions.data,function(index,value){
            if(index>2) return false;
            valueArray.push(value['value']);
        });
        if(!(valueArray.indexOf(1) > -1)){
            $(location).attr('href', '../results');
        }
    }
}

function setValue(element){
    if(element.value != ""){
        questions.data[initialQues]['value'] = Number(element.value);
    }else{
        questions.data[initialQues]['value'] = "";
    }
    setIsAnswered();
}

function setSubQuesValue(element){
    var quesid = element.getAttribute('quesid');
    if(element.value != ""){
        $.each(questions.data[initialQues]['subQuestions'],function(index,value){
            if(hasKeySetTo(value,'id',quesid)){
                value['value'] = Number(element.value);
                value['isAnswered'] = true;
            }
        });
    }else{
        $.each(questions.data[initialQues]['subQuestions'],function(index,value){
            if(hasKeySetTo(value,'id',quesid)){
                value['value'] ="";
                value['isAnswered'] = false;
            }
        }); 
    }
    setIsAnswered();
}

function hasKeySetTo(obj,key,value)
{
    return obj.hasOwnProperty(key) && obj[key]==value;
}

function setIsAnswered(){
    var isAnswered = false;
    var ques = questions.data[initialQues];
    if(parseInt(ques['value'])  > -1){
        isAnswered = true;
        $.each(ques['subQuestions'],function(index,value){
            if(!value['isAnswered']){
                isAnswered = false;
            }
        });
    };
    if(isAnswered){
        ques['isAnswered'] = true;
        $('#' + (initialQues+1)).find(".next").removeClass('button-disabled')
        // $('.next').removeClass('button-disabled');

    }else{
        ques['isAnswered'] = false;
        $('#' + (initialQues+1)).find(".next").addClass('button-disabled')
        // $('.next').addClass('button-disabled');

    }
}