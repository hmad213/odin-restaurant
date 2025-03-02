import "./styles.css"
import { loadHome } from "./js/home.js"
import { loadMenu } from "./js/menu.js"
import { loadAboutUs } from "./js/about-us.js"

document.addEventListener("DOMContentLoaded", function (){
    clearContent();
    loadHome();
    addMenuEvent();
});

document.querySelector(".homeButton").addEventListener("click", function(){
    clearContent();
    loadHome();
    addMenuEvent();
})

document.querySelector(".menuButton").addEventListener("click", function(){
    clearContent();
    loadMenu();
})

document.querySelector(".aboutButton").addEventListener("click", function(){
    clearContent();
    loadAboutUs();
})

function clearContent(){
    document.querySelector("#content").innerHTML = ""
}

function addMenuEvent(){
    document.querySelectorAll(".homeButton")[1].addEventListener("click", function(){
        clearContent();
        loadMenu();
    })
}