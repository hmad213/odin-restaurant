function loadAboutUs(){
    let aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-us");

    let heading = document.createElement("h1");
    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    addDetails(detailsContainer, "Islamabad", "123-456-7890", "456 Blue Area, Jinnah Avenue");
    addDetails(detailsContainer, "Karachi", "456-123-7890", "123 Shahrah-e-Faisal");
    addDetails(detailsContainer, "Lahore", "123-123-7890", "789 Gulberg Main Boulevard");

    heading.textContent = "We'd love to hear from you";

    aboutDiv.appendChild(heading);
    aboutDiv.appendChild(detailsContainer);

    document.querySelector("#content").appendChild(aboutDiv);
}

function addDetails(div, l, c, a){
    let detail = document.createElement("div");
    detail.classList.add("details");

    let location = document.createElement("h2");
    let contact = document.createElement("p");
    let address = document.createElement("p");

    location.textContent = l;
    contact.textContent = c;
    address.textContent = a;

    detail.appendChild(location);
    detail.appendChild(contact);
    detail.appendChild(address);

    div.appendChild(detail);
}

export { loadAboutUs }