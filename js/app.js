"use strict";

let secondaryPage = document.querySelector(".secondary-page")
let mainPage = document.querySelector(".main-page");
let apiKey = "ee93106d0f65de4553d6531305b257fe";

//TODO Function to generate weather data from openWeather api
async function getWeatherData(lat, long) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`)
        if(!response.ok){
           throw new Error(`HTTP error! status: ${response.status}`)
        }else{
            const json = await response.json();
            console.log(json);
        }
    } catch (e) {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    }
}


// TODO: Get geolocation information
function getCoordinates(){
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        //TODO: Pass coordinates into the getWeatherData function API
        getWeatherData(lat, long).then(r => );
});
}


    //TODO: Event listener that slides up the second page and calls api
//this works by adding the slide class that was defined and created in the css
//whenever the main page button is clicked
document.querySelector(".main-page-button").addEventListener("click",()=>{
secondaryPage.classList.add("slide");
    //TODO: This calls getCoordinates function which generates lat and long
    //TODO: And calls the getWeatherData function that contains the api
    getCoordinates();
})

//TODO: event listener that goes back to the mainpage from the second page
//this works by removing the .slide class from the second page div
//whenever the btn-to-main button is clicked
document.querySelector(".btn-to-main").addEventListener("click",()=>{
    secondaryPage.classList.remove("slide")
    console.log("GET WEATHER BUTTON CLICKED go back")
})



