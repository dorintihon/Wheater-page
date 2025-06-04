//script.js
async function getWeather(city = "London") {
    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=ZHLBTM3GFTKBVQWGUTAAR3UFN&contentType=json`);

    return data.json();
}

window.getWeather = getWeather;

console.log("Weather script loaded");

    