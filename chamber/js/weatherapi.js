// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const currentTemp1 = document.querySelector('#current-temp1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#figcaption1');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=West Valley City&units=imperial&appid=f9588660b59034f500496199128ef328';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            // displayResults(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    currentTemp1.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    weatherIcon1.setAttribute('src', iconsrc);
    weatherIcon1.setAttribute('alt', desc);
    captionDesc1.innerHTML = desc;
}