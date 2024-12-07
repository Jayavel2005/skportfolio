// Tool Tip Animation
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// Loader

const loader = document.getElementById("loader");
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1700)
})



const form = document.querySelector(".form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const submitButton = document.querySelector(".sendMail");

const serviceId = "service_rf7lxwf";
const templateId = "template_s7hbk84";
const publicKey = "uVsW-5R2kYDsq09kW";

emailjs.init(publicKey);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation (optional, add if needed)


    // Disable submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerText = "Sending...";

    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        message: messageInput.value
    };

    emailjs.send(serviceId, templateId, inputData)
        .then(() => {
            // Clear inputs and provide feedback
            nameInput.value = " ";
            emailInput.value = " ";
            messageInput.value = " ";
            submitButton.disabled = false;
            submitButton.innerText = "Submit";
            alert("Your message has been sent successfully!");
        })
        .catch((error) => {
            submitButton.disabled = false;
            submitButton.innerText = "Submit";
            alert(`There was an error sending your message: ${error.text || "Please try again."}`);
        });
});

// ScrollReveal({ reset: "true" }).reveal(".container");

