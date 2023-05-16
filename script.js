// script.js

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  const form = event.target;
  const section = form.parentNode;
  const successMessage = document.createElement("p");
  successMessage.textContent = "Your message was received";
  successMessage.style.color = "green";
  const checkmark = document.createElement("span");
  checkmark.textContent = "✔";
  checkmark.style.color = "green";

  section.replaceChild(successMessage, form);
  successMessage.appendChild(checkmark);
}

// Add event listeners to the forms
const abhiForm = document.getElementById("abhi-form");
abhiForm.addEventListener("submit", handleSubmit);

const alexForm = document.getElementById("alex-form");
alexForm.addEventListener("submit", handleSubmit);
