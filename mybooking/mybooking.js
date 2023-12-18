
const users = JSON.parse(localStorage.getItem('BookingDetails')) || {};

let locationelement = document.getElementById('finalloc');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let traveldate = document.getElementById('traveldate');
let Nooftravellers = document.getElementById('nooftravel');
let contact = document.getElementById('contact');
let type = document.getElementById('type');
let total = document.getElementById('cost');

locationelement.innerText = users.LocationName || 'Malaysia';
Name.innerText = users.Name || 'N/A';
email.innerText = users.Email || 'N/A';
traveldate.innerText = users.DateOfTravel || 'N/A';
Nooftravellers.innerText = users.NoOFTraveller || 'N/A';
contact.innerText = users.Contact || 'N/A';
type.innerText = users.Type || 'N/A';
total.innerText = users.LocatioPrice || '$5500';

console.log(users);


