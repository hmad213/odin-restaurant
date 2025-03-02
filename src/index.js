import "./styles.css"
import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"

document.addEventListener("DOMContentLoaded", function (){
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

function clearContent(){
    document.querySelector("#content").innerHTML = ""
}

function addMenuEvent(){
    document.querySelectorAll(".homeButton")[1].addEventListener("click", function(){
        clearContent();
        loadMenu();
    })
}