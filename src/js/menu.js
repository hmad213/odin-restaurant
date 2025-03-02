import biryani from "../images/biryani.png"
import burger from "../images/burger.png"
import pizza from "../images/pizza.png"
import taco from "../images/taco.png"

function loadMenu(){
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    let itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    addItem(itemContainer, "Burger", "A delicious, juicy burger with a savory patty, fresh toppings, and a soft bun.", burger);
    addItem(itemContainer, "Pizza", "A crispy, cheesy delight with rich toppings and flavorful sauce.", pizza);
    addItem(itemContainer, "Biryani", "A fragrant, spiced rice dish with tender meat and aromatic herbs.", biryani);
    addItem(itemContainer, "Taco", "A crunchy or soft tortilla filled with seasoned meat and toppings.", taco);

    let heading = document.createElement("h1");
    heading.textContent = "Menu";

    menuDiv.appendChild(heading);
    menuDiv.appendChild(itemContainer);

    document.querySelector("#content").appendChild(menuDiv);
}

function addItem(div, name, description, img){
    let item = document.createElement("div")
    item.classList.add("item");

    let heading = document.createElement("h1");
    let para = document.createElement("p");
    let image = document.createElement("img");
    let button = document.createElement("button");
    let textDiv = document.createElement("div");
    textDiv.classList.add("text");

    image.src = img;
    heading.textContent = name;
    para.textContent = description;
    button.textContent = "Add";

    textDiv.appendChild(heading);
    textDiv.appendChild(para);
    textDiv.appendChild(button);

    item.appendChild(image);
    item.appendChild(textDiv)
    
    div.appendChild(item)
}

export { loadMenu }