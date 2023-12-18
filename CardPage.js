
const bookNowButton = document.getElementById('book-now');
console.log()



const SubmitBookingFormBtn = document.getElementById("SubmitBookingForm");

SubmitBookingFormBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let obj = {}
    obj.Name = document.getElementById("name").value;
    obj.Email = document.getElementById("email").value;
    obj.DateOfTravel = document.getElementById("date").value;
    obj.Type = document.getElementById("type").value;
    obj.Contact = document.getElementById("contactNumber").value;
    obj.NoOFTraveller = document.getElementById("numGuests").value;

    localStorage.setItem("BookingDetails",JSON.stringify(obj));
    const users = JSON.parse(localStorage.getItem(("BookingDetails")));
    console.log(users);
    window.location.href = './mybooking/mybooking.html';
})


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const locationId = urlParams.get('id');

    if(locationId){
        let data = fetchLocationDetails(locationId);
        console.log(data);
    }  
    else
    {
        console.error('Location ID not found in URL parameters.');
    }
});

var price,mainLocation;
var data1;
function fetchLocationDetails(locationId){

    const locationDetailsUrl = `https://mock-final-copy-api.onrender.com/locations/${locationId}`;

    fetch(locationDetailsUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error('HTTP error! Status: ${response.status}');
        }
        return response.json();
    })
    .then(data =>{
        // data1 = data;
        let imageDiv = document.getElementById("imageDiv")
        let img = document.createElement("img");
        img.setAttribute("src",data.image);
        // img.innerHTML = `src="${data.image}" alt="Hello"
        // `
        img.classList.add("imageInsideDiv");
        imageDiv.append(img);
        // console.log(img);
        mainLocation = data.location;
        price = data.price;
        document.getElementById('location').textContent = data.location;
        document.getElementById('cost-hotel').textContent = `Price: $${data.price}`;
        document.getElementById('location-details').textContent = data.description;
        
        return data;
    })
    .catch(error => {
        console.error('Error fetching location details:', error);
    });
    
}

document.addEventListener('DOMContentLoaded', function () {
    
    const logoButton = document.getElementById('Alogo');

   logoButton.addEventListener('click', function () {
        window.location.href = "./index.html";
    });

});

document.addEventListener("DOMContentLoaded", function () {
    let logo = document.querySelector(".Rlogo");
    if (logo) {
        logo.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

   
});