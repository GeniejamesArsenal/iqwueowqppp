
document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle password visibility
    const togglePassword = document.querySelector('.show-password');
    const passwordInput = document.querySelector('input[type="password"]');
    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye-slash');
        togglePassword.classList.toggle('fa-eye');
    });
});
