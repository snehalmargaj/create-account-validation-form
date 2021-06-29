const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmpass = document.getElementById("confirm")
const form = document.getElementById("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkinputs();
});

function checkinputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmVal = confirmpass.value.trim();

    if(usernameVal===""){
        error(username,"Username cannot be blank.");
    }else{
        success(username);
    }

    if(emailVal===""){
        error(email,"Email cannot be blank.");
    }else{
        success(email);

    }

    if(passwordVal===""){
        error(password,"Password cannot be blank.")
    }else{
        success(password);
    }

    if(confirmVal===""){
        error(confirmpass,"Confirm password cannot be blank.")
    }else if(confirmVal!==passwordVal){
        error(confirmpass,"Password does not match.");
    }else{
        success(confirmpass);
    }
}

function success(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function error(input,message){
    const formControl = input.parentElement;
    const msg = formControl.querySelector("small");

    msg.innerHtml=message;

    formControl.className = "form-control error";
}