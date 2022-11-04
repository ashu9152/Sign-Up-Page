let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

if(form){

    form.addEventListener('submit', ()=>{
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()
    

    if(usernameValue === ''){
        showError(username,'User Name cannot be empty')
       
    }else{
        success(username)
       
    }
})
    }else{
        console.log('Error')
}



function showError(input, message) {
    const formControl = input.parentElement  //.form-control
    const small = formControl.querySelector('small')

    //add error message inside small
    small.innerText = message

    //add error class
    formControl.classname = 'form-control error'
}

function success (input){
    const formControl = input.parentElement    //.form-control
    formControl.classname = 'form-control success'
}