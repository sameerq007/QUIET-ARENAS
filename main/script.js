document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginToggle.addEventListener('click', function() {
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupToggle.addEventListener('click', function() {
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // Handle country code link clicks
    document.querySelectorAll('.country-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const code = this.getAttribute('data-code');  
            document.getElementById('country-code').value = code;
            // Highlight selected link
            document.querySelectorAll('.country-link').forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Handle form submission - redirect to dashboard
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, you would validate credentials here
            const username = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]') ? form.querySelector('input[type="email"]').value : localStorage.getItem('userEmail') || '';
            const countryCode = form.querySelector('#country-code') ? form.querySelector('#country-code').value : '';
            const phoneNumber = form.querySelector('#phone-number') ? form.querySelector('#phone-number').value : '';
            const fullPhone = countryCode && phoneNumber ? `${countryCode} ${phoneNumber}` : '';
            localStorage.setItem('userUsername', username);
            localStorage.setItem('userEmail', email);
            if (fullPhone) localStorage.setItem('userPhone', fullPhone);

            // Initialize user-specific stats to 0 on signup
            if (form.id === 'signup-form') {
                localStorage.setItem(`${username}_gamesPlayed`, '0');
                localStorage.setItem(`${username}_achievements`, '0');
                localStorage.setItem(`${username}_hoursToday`, '0');
                localStorage.setItem(`${username}_playDate`, '');
                // Initialize high scores for games
                localStorage.setItem(`${username}_cyberHighScore`, '0');
                localStorage.setItem(`${username}_sudokuHighScore`, '0');
                localStorage.setItem(`${username}_pixelHighScore`, '0');
                localStorage.setItem(`${username}_chessHighScore`, '0');
                localStorage.setItem(`${username}_levelDevilHighScore`, '0');
            }

            window.location.href = 'dashboard.html';
        });
    });
});
