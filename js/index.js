document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let message = document.getElementById('message');
    
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }
    
    message.style.color = "green";
    message.textContent = "Registration successful!";
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPassword = document.getElementById('confirmPassword');

// Show/Hide Password
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Show/Hide Confirm Password
toggleConfirmPassword.addEventListener('click', function (e) {
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
