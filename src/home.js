function loadHome(){
    let text = document.createElement("div");
    text.classList.add("text");

    let heading = document.createElement("h1");
    let subtitle = document.createElement("h5");
    let button = document.createElement("button");

    heading.textContent = "Gourmet Hub";
    subtitle.textContent = "Add something I dont know";
    button.textContent = "Order Now!";

    text.appendChild(heading);
    text.appendChild(subtitle);
    text.appendChild(button);

    document.querySelector("#content").appendChild(text);
}

export {loadHome};