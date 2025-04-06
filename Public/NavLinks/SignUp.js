document.addEventListener('DOMContentLoaded', function() {
    const authContainer = document.getElementById('authContainer');
    const signInToggle = document.getElementById('signInToggle');
    const signUpToggle = document.getElementById('signUpToggle');
    const signInToggle2 = document.getElementById('signInToggle2');
    const signUpToggle2 = document.getElementById('signUpToggle2');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Toggle between forms
    function toggleForms(showSignUp) {
        authContainer.classList.toggle('active', showSignUp);
        
        // Update toggle buttons
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => btn.classList.remove('active'));
        
        if (showSignUp) {
            signUpToggle.classList.add('active');
            signUpToggle2.classList.add('active');
        } else {
            signInToggle.classList.add('active');
            signInToggle2.classList.add('active');
        }
    }

    // Event listeners
    signInToggle.addEventListener('click', () => toggleForms(false));
    signUpToggle.addEventListener('click', () => toggleForms(true));
    signInToggle2.addEventListener('click', () => toggleForms(false));
    signUpToggle2.addEventListener('click', () => toggleForms(true));
    switchToSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(true);
    });
    switchToSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(false);
    });

    // Form submission
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;
        alert('Sign In functionality would be implemented here');
    });

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('signUpConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        alert('Sign Up functionality would be implemented here');
    });

    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.querySelector('span').textContent;
            alert(`${provider} login would be implemented here`);
        });
    });
});