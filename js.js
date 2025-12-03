document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
    const registrationError = document.getElementById('registrationError');
    const loginError = document.getElementById('loginError');
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToRegister = document.getElementById('switchToRegister');
    const signUpForm = document.querySelector('.trans');
    const signInForm = document.querySelector('.signup');
    const signin = document.querySelector('.signin');
    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    switchToLogin.addEventListener('click', function() {
        signUpForm.classList.add('active');
        signin.classList.add('active');
        signInForm.classList.add('active');
        registrationError.textContent = '';
        loginError.textContent = '';
    });
    switchToRegister.addEventListener('click', function() {
        signInForm.classList.remove('active');
        signUpForm.classList.remove('active');
        signin.classList.remove('active');
        registrationError.textContent = '';
        loginError.textContent = '';
    });
    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        registrationError.textContent = '';
        if (!name || !email || !password || !confirmPassword) {
            registrationError.textContent = 'Please fill out all fields';
            return;
        }
        if (password !== confirmPassword) {
            registrationError.textContent = 'Passowrds not match';
            return;
        }
    if (!emailPattern.test(email)) {
        registrationError.textContent = 'Please enter a valid email address.';
        return;
    }
        alert('Register Completed successfully');
    });
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        loginError.textContent = '';
        if (!email || !password) {
            loginError.textContent = 'Please fill out all fields';
            return;
        }
        if (!emailPattern.test(email)) {
        loginError.textContent = 'Please enter a valid email address.';
        return;}
        alert('Login completed');
    });
});
