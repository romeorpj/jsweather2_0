"use strict";
import axios from "axios";

let secondaryPage = document.querySelector(".secondary-page")
let mainPage = document.querySelector(".main-page");
let apiKey = "ee93106d0f65de4553d6531305b257fe";

//going to fetch open weather api
//use the geo-navigator to get access to lat and long
let getWeatherData = async() => {
    try {

        const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}').then(res => res.json())
            .then((data) => {
                // ENTER CODE HERE
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// openwether onecall api
//





//Event listener that slides up the second page
//this works by adding the slide class that was defined and created in the css
//whenever the main page button is clicked
document.querySelector(".main-page-button").addEventListener("click",()=>{
secondaryPage.classList.add("slide");
    // console.log("GET WEATHER BUTTON CLICKED")

    // TODO:When main buttom is clicked, run the geolocator to retrieve openweather api data.

})

//event listener that goes back to the mainpage from the second page
//this works by removing the .slide class from the second page div
//whenever the btn0to-main button is clicked

document.querySelector(".btn-to-main").addEventListener("click",()=>{
    secondaryPage.classList.remove("slide")
    console.log("GET WEATHER BUTTON CLICKED go back")
})

