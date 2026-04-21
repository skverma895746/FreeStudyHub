const form = document.getElementById("contactForm");
const errorMessage = document.getElementById("error-message");

if (form && errorMessage) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorMessage.textContent = "Sending.....";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new URLSearchParams(new FormData(form)),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      const data = await response.json();

      if (response.ok) {
        errorMessage.textContent = data.message || "Message sent successfully.";
        errorMessage.style.color = "green";
        form.reset();
      } else {
        errorMessage.textContent = data.message || "Something went wrong.";
        errorMessage.style.color = "red";
      }
    } catch (error) {
      console.log(error); // 🔥 important
      errorMessage.textContent = "Server connection failed.";
      errorMessage.style.color = "red";
    }

    clearMessage();
  });
}

function clearMessage() {
  setTimeout(() => {
    errorMessage.textContent = "";
  }, 2000);
}