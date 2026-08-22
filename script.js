// Contact form: mirrors the original "Sent!" confirmation behavior.
// Note: this only gives visual confirmation — it does not actually send an email.
// To make it functional, wire the form up to a service like Formspree, EmailJS, or Netlify Forms.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var btnLabel = document.getElementById("send-btn-label");

  if (!form || !btnLabel) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btnLabel.textContent = "Sent!";
    form.reset();
    setTimeout(function () {
      btnLabel.textContent = "Send Message";
    }, 2500);
  });
});

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('send-btn');
const submitBtnLabel = document.getElementById('send-btn-label');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Replace this with your actual Web3Forms access key
    formData.append("access_key", "30016886-91db-46b8-ba3e-03dc9a9f5596");

    submitBtn.disabled = true;
    submitBtnLabel.textContent = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.disabled = false;
        submitBtnLabel.textContent = "Send Message";
    }
});