//script.js
import './styles.css';

let city = "London"; 
let temp_unit = "metric";
let isMetric = true;


const input = document.querySelector(".search-container .search-bar");
const button = document.querySelector(".search-container .search-button");

button.addEventListener("click", () => {
    city = input.value.trim();
    if (!city){
        alert("Please enter a location");
        return;
    }
    displayWeather(city); 
});

const toggle = document.querySelector(".unit-toggle");

toggle.addEventListener("change", () => {
    if (isMetric){
        temp_unit = "us";
        isMetric = false;
    }else{
        temp_unit = "metric";
        isMetric = true;
    }

    displayWeather(city);
})

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

    const tempUnitElement = document.querySelector(".weather-container .unit");

    if (isMetric){
        tempUnitElement.textContent = "C";
    }else{
        tempUnitElement.textContent = "F";
    }

}


window.displayWeather = displayWeather;


console.log("Weather script loaded");







    