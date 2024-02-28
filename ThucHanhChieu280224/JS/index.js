function checkUser(){
    var regex=/^[a-z0-9_-]{3,16}$/
    var checked=document.getElementById("textUser").value;

    if(regex.test(checked)){
        document.getElementById("notifyUser").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyUser").innerHTML="Nhập sai";
    }
}

function checkPassword(){
    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
    var checked=document.getElementById("textPassword").value;

    if(regex.test(checked)){
        document.getElementById("notifyPassword").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyPassword").innerHTML="Nhập sai";
    }
}

function checkEmail(){
    var regex=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z]\.]{2,63})$/
    var checked=document.getElementById("textEmail").value;

    if(regex.test(checked)){
        document.getElementById("notifyEmail").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyEmail").innerHTML="Nhập sai";
    }
}

function checkIP(){
    var regex=/^((25[0-5]|2[0-4][0-9]\[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]\[01]?[0-9][0-9]?)$/
    var checked=document.getElementById("textIP").value;

    if(regex.test(checked)){
        document.getElementById("notifyIP").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyIP").innerHTML="Nhập sai";
    }
}

function checkHex(){
    var regex=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/
    var checked=document.getElementById("textHex").value;

    if(regex.test(checked)){
        document.getElementById("notifyHex").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyHex").innerHTML="Nhập sai";
    }
}

function checkSlug(){
    var regex=/^[a-z0-9]+$/
    var checked=document.getElementById("textSlug").value;

    if(regex.test(checked)){
        document.getElementById("notifySlug").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifySlug").innerHTML="Nhập sai";
    }
}

function checkURL(){
    var regex=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w-\.-]*)*\/?$/
    var checked=document.getElementById("textURL").value;

    if(regex.test(checked)){
        document.getElementById("notifyURL").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyURL").innerHTML="Nhập sai";
    }
}

function checkDate(){
    var regex=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    var checked=document.getElementById("textDate").value;

    if(regex.test(checked)){
        document.getElementById("notifyDate").innerHTML="Nhập đúng";
    }
    else{
        document.getElementById("notifyDate").innerHTML="Nhập sai";
    }
}