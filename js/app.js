"use strict";
let secondaryPage = document.querySelector(".secondary-page")
let mainPage = document.querySelector(".main-page");
let apiKey = ee93106d0f65de4553d6531305b257fe;

//Event listener that slides up the second page
//this works by adding the slide class that was defined and created in the css
//whenever the main page button is clicked
document.querySelector(".main-page-button").addEventListener("click",()=>{
secondaryPage.classList.add("slide")
    console.log("GET WEATHER BUTTON CLICKED")
})

//event listener that goes back to the mainpage from the second page
//this works by removing the .slide class from the second page div
//whenever the btn0to-main button is clicked

document.querySelector(".btn-to-main").addEventListener("click",()=>{
    secondaryPage.classList.remove("slide")
    console.log("GET WEATHER BUTTON CLICKED go back")
})

//going to fetch open weather api
//use the geo-navigator to get access to lat and long


//openwether onecall api
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}