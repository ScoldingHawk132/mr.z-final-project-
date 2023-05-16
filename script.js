document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var submitButton = document.querySelector('input[type="submit"]');
  var labels = document.querySelectorAll("label");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var successMessage = document.createElement("p");
    var successIcon = document.createElement("span");

    // Add success class to the form
    form.classList.add("success");

    // Hide the form inputs and labels
    nameInput.style.display = "none";
    emailInput.style.display = "none";
    messageInput.style.display = "none";

    for (var i = 0; i < labels.length; i++) {
      labels[i].style.display = "none";
    }

    // Hide the submit button
    submitButton.style.display = "none";

    // Create success message and icon
    successMessage.textContent = "Your Message was received ✓";
    successMessage.style.color = "green";

    // Append success message and icon to the form
    form.parentNode.appendChild(successMessage);
    form.parentNode.appendChild(successIcon);
  });
});
