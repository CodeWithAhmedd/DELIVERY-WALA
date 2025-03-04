document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let storedUsername = 'admin';
    let storedPassword = 'smit123';

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'restraunt.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});