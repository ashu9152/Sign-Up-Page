const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		onError(userName, 'Username cannot be blank');
	} else {
		onSuccess(userName);
	}
	
	if(emailValue === '') {
		onError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		onError(email, 'Not a valid email');
	} else {
		onSuccess(email);
	}
	
	if(passwordValue === '') {
		onError(password, 'Password cannot be blank');
	} else {
		onSuccess(password);
	}
	
	if(password2Value === '') {
		onError(password2, 'Password2 is empty');
	} else if(passwordValue !== password2Value) {
		onError(password2, 'Passwords not same');
	} else{
		onSuccess(password2);
	}
}

function onError(inputValue, message) {
	const formControl = inputValue.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function onSuccess(inputValue) {
	const formControl = inputValue.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}