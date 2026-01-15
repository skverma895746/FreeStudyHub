
document.addEventListener("DOMContentLoaded",()=>
{
  // *********************
const Form = document.getElementById("contactForm");
if(Form){
Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const errorMessage = document.getElementById("error-message");
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
    } else {
       errorMessage.textContent = "Something went wrong ❌";
       errorMessage.style.color = "red";
       clearMessage();
    }
  });
   Form.reset();
});
}

// clearmessage 
function clearMessage(){
setTimeout(() => {
  errorMessage.textContent = "";
}, 2000);
}
// shareWeb site
const shareWebsite = document.querySelector("#shareWebsite");
if(shareWebsite){
  shareWebsite.addEventListener("click",()=>
  {
  if(navigator.share){
    navigator.share({
      title:document.title,
      url:window.location.href
    });
  }
  else{
    alert("share option  is not supported ");
  }
  });
}
// mobile menu 
const SmallMenu = document.querySelector("#navbar #menu-icon");
const MenuItems = document.querySelector("#navbar .navbar-items");
if(SmallMenu && MenuItems) {
SmallMenu.addEventListener("click",function(){
MenuItems.classList.toggle("active");
MenuItems.classList.contains("active")? SmallMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`: SmallMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});
}
//  ***********************
});



