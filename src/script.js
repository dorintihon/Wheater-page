//script.js
import './styles.css';

let city = "London"; 
let temp_unit = "metric";


const input = document.querySelector(".search-container .search-bar");
const button = document.querySelector(".search-container .search-button");

button.addEventListener("click", () => {
    city = input.value.trim();
    displayWeather(city);
});

async function getWeather(location = city, unit = temp_unit) {
    city = location;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=ZHLBTM3GFTKBVQWGUTAAR3UFN&contentType=json`);
    const data = await response.json(); 

    return data;
}

async function displayWeather(location = city) {
    const weather = await getWeather(location);
    
    const name = document.querySelector(".weather-container .name");
    name.textContent = weather.resolvedAddress;
;

    const description = document.querySelector(".weather-container .description");
    description.textContent = weather.description;

    const temperature = document.querySelector(".weather-container .temperature");
    temperature.textContent = weather.currentConditions.temp;

    const temp_unit = document.querySelector(".weather-container .unit");


}


window.displayWeather = displayWeather;


console.log("Weather script loaded");







    