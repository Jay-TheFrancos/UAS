document.addEventListener('DOMContentLoaded', function() {
    // Handle user registration
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (localStorage.getItem(username)) {
            document.getElementById('register-message').innerText = 'Username already exists!';
        } else {
            localStorage.setItem(username, password);
            document.getElementById('register-message').innerText = 'Registration successful!';
        }
    });

    // Handle user login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {
            document.getElementById('login-message').innerText = 'Login successful!';
            localStorage.setItem('loggedInUser', username); // Store logged-in user
            window.location.href = "task1.html"; // Redirect to home page
        } else {
            document.getElementById('login-message').innerText = 'Invalid username or password!';
        }
    });

    // Toggle registration form visibility
    document.getElementById('showRegisterForm').addEventListener('click', function() {
        const registerContainer = document.getElementById('registerContainer');
        const loginForm = document.getElementById('loginForm');
        const loginTitle = document.getElementById('loginTitle');

        if (registerContainer.classList.contains('hidden')) {
            registerContainer.classList.remove('hidden');
            loginForm.classList.add('hidden');
            loginTitle.classList.add('hidden');
        } else {
            registerContainer.classList.add('hidden');
            loginForm.classList.remove('hidden');
            loginTitle.classList.remove('hidden');

// Add an event listener to the remove account button
document.getElementById('removeAccount').addEventListener('click', function() {
    const username = localStorage.getItem('loggedInUser');
    if (username) {
        if (confirm(`Are you sure you want to remove your account, ${username}?`)) {
            localStorage.removeItem(username);
            localStorage.removeItem('loggedInUser');
            document.getElementById('login-message').innerText = 'Account removed successfully!';
            window.location.href = "login.html"; // Redirect back to login page
        }
    } else {
        document.getElementById('login-message').innerText = 'You are not logged in!';
    }
    

    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const removeAccountButton = document.getElementById('removeAccount');
    
        if (loggedInUser) {
            removeAccountButton.disabled = false;
        } else {
            removeAccountButton.disabled = true;
        }
    }
    
    // Call the checkLoginStatus function when the page loads
    window.addEventListener('load', checkLoginStatus);
    
    // Call the checkLoginStatus function when the user logs in or logs out
    document.getElementById('loginForm').addEventListener('submit', checkLoginStatus);
    document.getElementById('removeAccount').addEventListener('click', checkLoginStatus);

    function showLoginContainer() {
        document.getElementById('registerContainer').classList.add('hidden');
        document.getElementById('loginContainer').classList.remove('hidden');
        clearMessages();
    }
    
    function showRegisterContainer() {
        document.getElementById('registerContainer').classList.remove('hidden');
        document.getElementById('loginContainer').classList.add('hidden');
        clearMessages();
    }
    
    // Call the showLoginContainer function when the page loads
    window.addEventListener('load', showLoginContainer);
    
    // Call the showLoginContainer function when the user clicks the "Login-container" button
    document.getElementById('loginContainerButton').addEventListener('click', showLoginContainer);
    
    // Call the showRegisterContainer function when the user clicks the "Register-container" button
    document.getElementById('registerContainerButton').addEventListener('click', showRegisterContainer);
    
    function clearMessages() {
        document.getElementById('login-message').innerText = '';
        document.getElementById('register-message').innerText = '';
    }
    
    // Call the clearMessages function when the user switches between screens
    document.getElementById('showRegisterForm').addEventListener('click', clearMessages);
    document.getElementById('loginForm').addEventListener('submit', clearMessages);
});
    }
});
    });
