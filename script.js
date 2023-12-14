

const url = 'https://mock-apis-xxgj.onrender.com/locations';


async function getData(){

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('HTTP Error! status: ${response.status}');
        }

        const data = await response.json();
         console.log(data);
    }

    catch(error){
        console.error('Error', error.message);
    }
}

getData();







