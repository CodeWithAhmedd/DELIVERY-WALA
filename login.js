document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let storedUsername = 'admin';
    let storedPassword = 'smit123';

    if (username === storedUsername && password === storedPassword) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.href = 'restraunt.html';
        }, 1500); 
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});