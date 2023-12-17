
const users = JSON.parse(localStorage.getItem('BookingDetails')) || {};


let locationelement = document.getElementById('finalloc')
let Name = document.getElementById('name');
let email = document.getElementById('email');
let traveldate = document.getElementById('traveldate');
let Nooftravellers = document.getElementById('nooftravel');
let contact = document.getElementById('contact');
let type = document.getElementById('type');
let total = document.getElementById('cost');


locationelement.innerText = users.LocationName;
Name.innerText = users.Name;
email.innerText = users.Email;
traveldate.innerText = users.DateOfTravel;
Nooftravellers.innerText = users.NoOFTraveller;
contact.innerText = users.Contact;
type.innerText = users.Type;
total.innerText = users.LocatioPrice;

