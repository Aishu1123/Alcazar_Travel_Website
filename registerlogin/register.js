


let registerButton = document.getElementById("reg");
registerButton.addEventListener("click", registerUser);

document.getElementById('log').addEventListener('click', function(event) {
  
});



function registerUser(event) {
    event.preventDefault(); 

    const username = document.getElementById('regusername').value;
    const email = document.getElementById('regmail').value;
    const contact = document.getElementById('regcontact').value;
    const password = document.getElementById('regpassword').value;


    if (username === '' || password === '' || email===''|| contact===''||password==='') {
        alert('Please enter all the details');
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Username already exists');
        return;
    }

    users.push({ username, email, contact, password });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');

    window.location.href = 'login.html';
}
