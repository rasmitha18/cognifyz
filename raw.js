const form = document.getElementById("userForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passError = document.getElementById("passError");
const successMessage = document.getElementById("successMessage");

// Name validation
nameField.addEventListener("blur", function() {
    if (nameField.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
});

// Email validation
emailField.addEventListener("blur", function() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = "Enter valid email";
    } else {
        emailError.textContent = "";
    }
});

// Phone validation
phoneField.addEventListener("blur", function() {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneField.value)) {
        phoneError.textContent = "Enter 10 digit phone number";
    } else {
        phoneError.textContent = "";
    }
});

// Password validation
passwordField.addEventListener("blur", function() {
    if (passwordField.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
    } else {
        passError.textContent = "";
    }
});

// Form submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (
        nameField.value.trim() !== "" &&
        emailError.textContent === "" &&
        phoneError.textContent === "" &&
        passError.textContent === ""
    ) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    } else {
        successMessage.textContent = "";
        alert("Please fix errors before submitting.");
    }
});


if(vaild) {
    alert("successfully completed");
}