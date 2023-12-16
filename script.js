

const locationurl = 'https://mock-api-templated-copy.onrender.com/locations';




async function getData(url = `${locationurl}?_page=${page || 1}&_limit=6`) {

    try {
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        mainSection.innerHTML = "";
        console.log(data);
          appendData(data);
          pagination(35, 6);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let mainSection = document.getElementById("data-list-wrapper");  


function appendData(data){

    data.forEach(item => mainSection.append(createCard(item)));

  }

  function createCard(item){

       let card = document.createElement("div");
       card.classList.add('card-list');

       let image = document.createElement('img');
       image.className = 'card-image';
       image.src = item.image;
       image.alt = item.location;
  
         let heading = document.createElement('h3');
         heading.className = "heading";
         heading.textContent = item.location;

        let price = document.createElement('p');
        price.textContent = "Price: $"+ item.price;
        heading.className = "price";

        let description = document.createElement('p');
        description.className = 'desc';
        description.textContent = item.description;
           
        let flexCard = document.createElement('div');
        flexCard.append(heading);
        flexCard.append(price);

        card.appendChild(image);
        card.appendChild(flexCard);
        card.appendChild(description);
        return card;
  }

getData();


function filterData(){
 
let filterbuttonAll = document.getElementById('blue-btn');

filterbuttonAll.addEventListener('click', () =>{
    getData(`${locationurl}?_page=${page || 1}&_limit=6`);
  })
}


function Trendingbutton(){
     
    let Trendingfilter = document.getElementById('trending');

    Trendingfilter.addEventListener('click', () =>{
        getData(`${locationurl}?_page=${page || 1}&_limit=6`)
    })
}


function Popularbutton(){
     
    let Popularfilter = document.getElementById('popular');

    Popularfilter.addEventListener('click', () =>{
        getData(`${locationurl}?_page=${page || 1}&_limit=6`)
    })
}

function Featuresbutton(){
     
    let Featurefilter = document.getElementById('features');

    Featurefilter.addEventListener('click', () =>{
        getData(`${locationurl}?_page=${page || 1}&_limit=6`)
    })
}

function Recommendbutton(){
    let Recommendfilter = document.getElementById('recommend');

    Recommendfilter.addEventListener('click', () =>{
        getData(`${locationurl}?_page=${page || 1}&_limit=6`)
    })
}

function Tourpackagebutton(){
     
    let Tourfilter = document.getElementById('tour');

    Tourfilter.addEventListener('click', () =>{
        getData(`${locationurl}?_page=${page || 1}&_limit=6`)
    })
}


let paginationWrapper = document.getElementById('paginationwrapper');

function pagination(total, limit){

    let totalPage = Math.ceil(total/limit);

    paginationWrapper.innerHTML = "";

    for(let i = 1; i < totalPage; i++){
 
        let button = document.createElement('button');
        
        button.className = "pagination-button";
        button.textContent = i;
        paginationWrapper.append(button);
        button.addEventListener('click', ()=>{
            getData(`${locationurl}?_page=${i}&_limit=6`);
        })
    }
}
