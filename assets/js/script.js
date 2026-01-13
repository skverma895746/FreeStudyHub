const Form = document.getElementById("contactForm");
const errorMessage = document.getElementById("error-message");

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const agreeCheckbox = document.getElementById("agree");
  if (!agreeCheckbox.checked) {
    errorMessage.textContent = "Please agree to the Terms & Conditions ❗";
    errorMessage.style.color = "red";
     clearMessage();
    return; 
  }
  fetch(Form.action, {
    method: "POST",
    body: new FormData(Form),
    headers: {
      "Accept": "application/json"
    }
  }).then(response => {
    if (response.ok) {
       errorMessage.textContent = "Message sent successfully ✅";
       errorMessage.style.color = "green";
        clearMessage();
      Form.reset();
    } else {
       errorMessage.textContent = "Something went wrong ❌";
       errorMessage.style.color = "red";
       clearMessage();
    }
  });
});
// clearmessage 
function clearMessage(){
setTimeout(() => {
  errorMessage.textContent = "";
}, 2000);
}
// shareWeb site
function shareWebsite(){
  if(navigator.share){
    navigator.share({
      title:document.title,
      url:window.location.href
    });
  }
  else{
    alert("share option  is not supported ");
  }
}
