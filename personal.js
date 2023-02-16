var nameError =document.getElementById('name-error');
var mailError =document.getElementById('mail-error');
var messageError =document.getElementById('message-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
        nameError.innerHTML='Enter Full Name';
        return false;
    }
    nameError.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;
}

function validateMail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        mailError.innerHTML='Email is Required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML='Email Invalid';
        return false;
    }

    mailError.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=20;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML='required '+left+' more characters';
        return false;
    }
    messageError.innerHTML='';
    return true; 
}