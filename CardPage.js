const bookNowButton = document.getElementById('book-now');


//  const LocationName = document.getElementById('location')
//  LocationName.textContent = locations.location;

//  const LocationPrice = document.getElementById('cost-hotel')
//  LocationPrice.textContent = locations.price;

//  const LocationDesc = document.getElementById('location-details')
//  LocationDesc.textContent = locations.description;

//  DEEPAK <--START-->
console.log()
// ;(function emptyDataToLocalStorage (){
//     localStorage.setItem("BookingDetails",JSON.stringify({
//         Name:"",
//         Email:"",
//         DateOfTravel:"",
//         NoOFTraveller:"",
//         Type:"",
//         Contact:""
//     }));
// }());

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
    // window.location.href = 'mybooking.html';
})

// const form = document.getElementById("FormInsideCanvas");

