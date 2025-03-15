const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const mainButton = document.querySelector(".main-btn"); // Select the button

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");

    // Hide the button when menu is expanded, show it when collapsed
    if (window.innerWidth <= 768) {
        mainButton.classList.toggle("hide-btn");
    }
});

