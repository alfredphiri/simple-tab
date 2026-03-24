const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const contacts = document.querySelector(".contacts");

const homeContainer = document.querySelector(".home-container");
const aboutContainers = document.querySelectorAll(".about-container");
const servicesContainer = document.querySelector(".services-container");
const contactsContainer = document.querySelector(".contacts-container");

const tabs = document.querySelectorAll(".tab-header div");

// Hide all tab content and remove active classes
function hideAll() {
    homeContainer.style.display = "none";
    aboutContainers.forEach(container => container.style.display = "none");
    servicesContainer.style.display = "none";
    contactsContainer.style.display = "none";
    
    tabs.forEach(tab => tab.classList.remove("active"));
}

// Show content based on tab clicked
home.addEventListener("click", () => {
    hideAll();
    homeContainer.style.display = "block";
    home.classList.add("active");
});

about.addEventListener("click", () => {
    hideAll();
    aboutContainers.forEach(container => container.style.display = "block");
    about.classList.add("active");
});

services.addEventListener("click", () => {
    hideAll();
    servicesContainer.style.display = "block";
    services.classList.add("active");
});

contacts.addEventListener("click", () => {
    hideAll();
    contactsContainer.style.display = "block";
    contacts.classList.add("active");
});

// Show home tab by default
home.click();
