

let loginButton = document.getElementById("log1");
loginButton.addEventListener('click', loginUser)


function loginUser(event) {
    event.preventDefault(); 

    const logUsername = document.getElementById('username').value;
    const logPassword = document.getElementById('password').value;

    if (logUsername === '' || logPassword === '') {
        alert('Please enter both username and password');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === logUsername && user.password === logPassword);

    if (user) {
        alert('Login successful!');
        window.location.href = '../index.html';
    } 
    else {
        alert('Invalid username or password');
    }
}
