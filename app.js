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

//Modal items
const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".main-btn");
const closeBtn = document.querySelector(".close-btn");

// Click events
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
}
);  

// Hide modal on outside click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//Form Validation
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email"); 
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

//Show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = "form-validation error";

    const errorMessage = formValidation.querySelector("p");
    errorMessage.innerText = message;
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    });
}

//Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
    }
}

//Check passwords match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

//Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = "form-validation valid";
}

//Get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([nameInput, email, password, passwordConfirm]);
    checkLength(nameInput, 2, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
});