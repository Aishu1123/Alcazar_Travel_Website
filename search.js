

const url = 'https://mock-final-copy-api.onrender.com/locations';
let searchArea = document.getElementById("Search_area");
let form = document.getElementById("form");

async function fetchData(page, searchData = "") {
    try {
        let searchQuery = new URLSearchParams(window.location.search).get("query");
        let res = await fetch(`${url}?_page=${page || 1}&${searchData}&location_like=${searchQuery}`);
        let data = await res.json();
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
        window.location.href = `CardPage.html?id=${data.id}`;
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

    fetchData(page, '', sortParam);
});
