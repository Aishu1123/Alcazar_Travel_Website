
const locationurl = 'https://mock-final-copy-api.onrender.com/locations';

let currentPage = 1;


async function getData(url = `${locationurl}?_page=${currentPage}&_limit=6`) {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const totalCountHeader = response.headers.get('X-Total-Count');
        const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

        const data = await response.json();
        mainSection.innerHTML = "";
        console.log(data);
          appendData(data);
          
          if (totalCount > 0) {
            pagination(totalCount, 6);
          }
          else {
            currentPage = Math.max(1, currentPage - 1);
          }
         
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let mainSection = document.getElementById("data-list-wrapperr");  


function appendData(data) {
    data.forEach(item => mainSection.append(createCard(item)));
}

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.location;
    card.appendChild(image);

    const info = document.createElement('div');
    info.className = 'info'; 
    
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
        window.location.href = `CardPage.html?id=${data.id}`;
    });
    read.addEventListener('click', function () {
        window.location.href = `./CardPage.html?id=${data.id}`;
    });
    return card;
}


getData();


function filterData(){
 
let filterbuttonAll = document.getElementById('blue-btn');

filterbuttonAll.addEventListener('click', () =>{
    getData(`${locationurl}?_page=${currentPage}&_limit=6`);
  })
}


function Trendingbutton(){
     
    let Trendingfilter = document.getElementById('trending');

    Trendingfilter.addEventListener('click', () =>{

       let url = `${locationurl}?_page=${currentPage}&_limit=6&price_lte=2000`;

        getData(url);

    })
}

function Popularbutton() {


    let Popularfilter = document.getElementById('popular');
    
    Popularfilter.addEventListener('click', () =>{
       
    let url = `${locationurl}?_page=${currentPage}&_limit=6&price_lte=3000`;
    getData(url);
    
});
}



function Recommendbutton(){
    let Recommendfilter = document.getElementById('recommend');

    Recommendfilter.addEventListener('click', () =>{
        let url = `${locationurl}?_page=${currentPage}&_limit=6&price_gte=3000&price_lt=5000`;
        getData(url);
    });
}

function Premiumbutton(){
     
    let Tourfilter = document.getElementById('premium');

    Tourfilter.addEventListener('click', () =>{
        let url = `${locationurl}?_page=${currentPage}&_limit=6&price_gte=5000`;

        getData(url);
      
    })
}


let paginationWrapper = document.getElementById('paginationwrapper');

function pagination(total, limit){

    let totalPage = Math.ceil(total/limit);

    paginationWrapper.innerHTML = "";

    for(let i = 1; i <= totalPage; i++){
 
        let button = document.createElement('button');
        
        button.className = "pagination-button button-default";
        button.textContent = i;
        paginationWrapper.append(button);
        button.addEventListener('click', ()=>{
            currentPage = i;
            getData(`${locationurl}?_page=${currentPage}&_limit=6`);
        })
    }
}


