
document.addEventListener("DOMContentLoaded", () => {
  // shareWeb site
  const shareWebsite = document.querySelector("#shareWebsite");
  if (shareWebsite) {
    shareWebsite.addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        });
      }
      else {
        alert("share option  is not supported ");
      }
    });
  }
  // mobile menu 
  const SmallMenu = document.querySelector("#navbar #menu-icon");
  const MenuItems = document.querySelector("#navbar .navbar-items");
  if (SmallMenu && MenuItems) {
    SmallMenu.addEventListener("click", function () {
      MenuItems.classList.toggle("active");
      MenuItems.classList.contains("active") ? SmallMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>` : SmallMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
  }
  //  ***********************
});



