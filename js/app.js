"use strict";
let secondaryPage = document.querySelector(".secondary-page")

// clickevent that activates the second page slideup transition

document.querySelector(".main-page-button").addEventListener("click",()=>{

secondaryPage.classList.toggle(".slide")
    console.log("GET WEATHER BUTTON CLICKED")
})