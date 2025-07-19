const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const contacts = document.querySelector(".contacts");

const homeContainer = document.querySelector(".home-container");
const aboutContainers = document.querySelectorAll(".about-container");
const servicesContainer = document.querySelector(".services-container");
const contactsContainer = document.querySelector(".contacts-container");

// Hide all tab content
function hideAll() {
    homeContainer.style.display = "none";
    aboutContainers.forEach(container => container.style.display = "none");
    servicesContainer.style.display = "none";
    contactsContainer.style.display = "none";
}

// Show content based on tab clicked
home.addEventListener("click", () => {
    hideAll();
    homeContainer.style.display = "block";
});

about.addEventListener("click", () => {
    hideAll();
    aboutContainers.forEach(container => container.style.display = "block");
});

services.addEventListener("click", () => {
    hideAll();
    servicesContainer.style.display = "block";
});

contacts.addEventListener("click", () => {
    hideAll();
    contactsContainer.style.display = "block";
});

// Show home tab by default
home.click();
