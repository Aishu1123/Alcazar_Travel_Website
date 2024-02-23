

const url = 'https://mock-api-alcazar.onrender.com/locations';
let searchArea = document.getElementById("Search_area");
let form = document.getElementById("form");

async function fetchData(page, searchData = "") {
    try {
        let searchQuery = new URLSearchParams(window.location.search).get("query");
        let res = await fetch(`${url}?_page=${page || 1}&${searchData}&location_like=${searchQuery}`);
        let data = await res.json();
        searchArea.innerHTML = ""
        appendData(data);
    } catch (err) {
        console.log(err);
    }
}

function appendData(data) {
    data.forEach(item => searchArea.append(createCard(item)));
}

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.location;
    card.appendChild(image);

    const info = document.createElement('div');
    info.className = 'info'; // Change this to 'info'
    
    const heading = document.createElement('h2');
    heading.textContent = data.location;
  
    const price = document.createElement('p');
    price.textContent = `Price: $${data.price}`;
  
    const description = document.createElement('p');
    description.textContent = data.description;
  
    info.appendChild(heading);
    info.appendChild(price);
    info.appendChild(description);

    let read = document.createElement('a');
    read.className = 'btnn';
    read.href = '#';
    read.innerText = 'Read more';
  
    info.appendChild(read);
    card.appendChild(info);
   
   
    card.addEventListener('click', function () {
        window.location.href = `./CardPage.html?location=${data.location}`;
    });
    read.addEventListener('click', function () {
        window.location.href = `./CardPage.html?location=${data.location}`;
    });

    return card;
}

let page = 1;
fetchData(page);

let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', (e) => {
    let scrollTop = document.documentElement.scrollTop;
    if (Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
        page++;
        fetchData(page);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signupButton');
    const loginButton = document.getElementById('loginButton');
    const Tours = document.getElementById('tourr');

    signupButton.addEventListener('click', function () {
        window.location.href = "./registerlogin/login.html";
    });

    loginButton.addEventListener('click', function () {
        window.location.href = "./registerlogin/login.html";
    });
    Tours.addEventListener('click', function () {
        window.location.href = "./search.html?query=";
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

const searchButton = document.getElementById('sBtn');
searchButton.addEventListener('click', handleOnSubmit);

function handleOnSubmit(event) {
    event.preventDefault();
    let text = form.search.value;
    let query = text.toLowerCase();
    window.location.href = `./search.html?query=${query}`;
}

const sortByPriceDropdown = document.getElementById('sortByPrice');

// Event listener for sorting by price
sortByPriceDropdown.addEventListener('change', () => {
    const selectedOption = sortByPriceDropdown.value;
    let sortParam = '';

    if (selectedOption === 'lowToHigh') {
        sortParam = '_sort=price&_order=asc';
    } else if (selectedOption === 'highToLow') {
        sortParam = '_sort=price&_order=desc';
    }
    searchArea.innerHTML = "<h2>Sorting.. Please wait</h2>"
    fetchData(page, '', sortParam);
    
});

function sortingByFetch (){fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(locations => {
    // Assuming 'price' is the property you want to sort by
    const sortedLocations = locations.sort((a, b) => a.price - b.price);

    // Now 'sortedLocations' contains the locations sorted by price
    console.log(sortedLocations);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

const sortLowToHighButton = document.getElementById('sortLowToHighButton');

if (sortLowToHighButton) {
  sortLowToHighButton.addEventListener('click', fetchDataAndSort);
}
