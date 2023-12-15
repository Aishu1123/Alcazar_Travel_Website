


let registerButton = document.getElementById("reg");
registerButton.addEventListener("click", registerUser);

function registerUser(event) {
    event.preventDefault(); 

    // Gather user input values
    const username = document.getElementById('regusername').value;
    const email = document.getElementById('regmail').value;
    const contact = document.getElementById('regcontact').value;
    const password = document.getElementById('regpassword').value;
    const confirmpassword=document.getElementById('regconfirmpass').value;


    if (username === '' || password === '' || email===''|| contact===''||password===''||confirmpassword==='') {
        alert('Please enter all the details');
        return;
    }
    
  if(confirmpassword!==password){
    alert ('password does not match');
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
