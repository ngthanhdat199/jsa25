function register() {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    if (username.length < 6) {
        alert("Username must be at least 6 characters");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (!password.match(lowerCaseLetter)) {
        alert("Password must contain a lowercase letter");
        return;
    }

    if (!password.match(upperCaseLetter)) {
        alert("Password must contain an uppercase letter");
        return;
    }

    if (!password.match(numbers)) {
        alert("Password must contain a number or special character");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('User email already exists');
            return;
        }
    }

    const user = {
        username: username,
        email: email,
        password: password
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User created successfully, please login');
    window.location.href = './login.html';
}

function login() {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(users[i].username));
            alert('Logged in successfully');
            window.location.href = './index.html';
            return;
        }
    }

    alert('Invalid email or password');     
}