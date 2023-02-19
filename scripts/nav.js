let menu = document.querySelector(".mobile-menu");

let overlay = false;

function clickMenu() {
  if (overlay === false) {
    //open menu
    document.querySelector("#myNav").style.height = "100%";
    menu.classList.toggle("active");
    overlay = true;
  } else {
    //close menu
    document.querySelector("#myNav").style.height = "0";
    menu.classList.toggle("active");
    overlay = false;
  }
}

