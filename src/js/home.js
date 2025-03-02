import image from "../images/background.jpg"

function loadHome(){
    let homeDiv = document.createElement("div");
    homeDiv.classList.add("homeDiv");

    let img = document.createElement("img");
    let text = document.createElement("div");
    let heading = document.createElement("h1");
    let subtitle = document.createElement("h5");
    let button = document.createElement("button");

    text.classList.add("text");
    img.src = image;
    heading.textContent = "Gourmet Hub";
    subtitle.textContent = "Experience Food Like Never Before!";
    button.textContent = "Order Now!";
    button.classList.add("homeButton");

    text.appendChild(heading);
    text.appendChild(subtitle);
    text.appendChild(button);
    homeDiv.appendChild(img);
    homeDiv.appendChild(text);

    document.querySelector("#content").appendChild(homeDiv);
}

export {loadHome};