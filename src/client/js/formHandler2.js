let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let key = '661daa7377189bfe425b6af1f07ac279';

document.getElementById('name').addEventListener('click', performAction);

function performAction(e){
    e.preventDefault()

    const postCode = document.getElementById('name').value;
    getTemperature(baseURL, postCode, key)
    .then(function (data){
        // Add data to POST request
        postData('http://localhost:8081/addWeatherData', {temperature: data.main.temp } )
        // Function which updates UI
        .then(function() {
            updateUI()
        })
    })
}

// Async GET
const getTemperature = async (baseURL, code, key)=>{
// const getTemperatureDemo = async (url)=>{
    const response = await fetch(baseURL + code + ',us' + '&APPID=' + key)
    console.log(response);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.log('error', error);
    }
}

// Async POST
const postData = async (url = '', data = {}) => {
    const postRequest = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await postRequest.json();
        return newData;
    }
    catch (error) {
        console.log('Error', error);
    }
}

// Update user interface
const updateUI = async () => {
    const request = await fetch('http://localhost:8081/');
    try {
        const allData = await request.json();
        document.getElementById('results').innerHTML = allData.temperature;
    }
    catch (error) {
        console.log('error', error);
    }
}

export {performAction}