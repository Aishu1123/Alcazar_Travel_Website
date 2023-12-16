

const url = 'https://mock-api-templated-copy.onrender.com/locations';
//  let data = [];


let searchArea = document.getElementById("Search_area");  

async function fetchData(page,searchData=""){
    try{
        let res = await fetch(`${url}?_page=${page || 1}&${searchData}`);
        let data = await res.json();
         console.log(data);
        appendData(data)
    }
    catch(err){
        console.log(err);
    }
  }
  let container = document.getElementById("container");
let form = document.getElementById("form");
document.getElementsByClassName("material-symbols-outlined")
function handleOnSubmit(event) {
   event.preventDefault();
   let text = form.search.value;
   let query = text.toLowerCase();
    window.location.href = "./search.html";
    let searchData = data.filter((el) => el.location.toLowerCase().includes(query));

  localStorage.setItem("searchresult",text);
  window.location.href = "./search.html";
  fetchData(1,`location_like=${text}`);
}



  function appendData(data){
    data.forEach(item => searchArea.append(createCard(item)));
    
  }

function createCard(data) {
    
    const card = document.createElement('div');
    card.className = 'card';

   
    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.location;

    
    const heading = document.createElement('h3');
    heading.textContent = data.location;

    const price = document.createElement('p');
    price.textContent = `Price: $${data.price}`;

    const description = document.createElement('p');
    description.textContent = data.description;

    
    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(price);
    card.appendChild(description);

    card.addEventListener('click', function () {
      // Redirect to CardPage.html with some parameter, for example, location ID
      window.location.href = `./CardPage.html?location=${data.location}`;
  });

     return card;
  }

let page=1;
let flag = false;
fetchData(page);

let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
console.log(scrollHeight,clientHeight)
window.addEventListener('scroll',(e) => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(Math.ceil(scrollTop),scrollHeight-clientHeight);
  if(Math.ceil(clientHeight+scrollTop)>= scrollHeight) {
    console.log("at bottom now");
    page++;
    fetchData(page);
    
  }
})

document.addEventListener('DOMContentLoaded', function () {
  
  const signupButton = document.getElementById('signupButton');
  const loginButton = document.getElementById('loginButton');

  
  signupButton.addEventListener('click', function () {
      
      window.location.href = "./register.html";
  });

  loginButton.addEventListener('click', function () {
      
      window.location.href = "./login.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  
    let logo = document.querySelector(".Alogo");
  
    if (logo) {
      logo.addEventListener("click", function () {
       
        window.location.href = "index.html";
      });
    }
  });