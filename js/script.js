/* Start Page */

window.onload = function () {
    var spinner = document.getElementById('sp');
    document.body.style.overflow = "hidden";

    setTimeout(function () {
        spinner.style.display = "none";
        document.body.style.overflow = "auto";
    },3000);
    
}


let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

let btnMenu = document.getElementById('menu-icon');
let btnClos = document.getElementById('clos-icon');
let navBar = document.querySelector('.navbar');

btnMenu.onclick = function(){
  navBar.style.display = 'block';
  btnClos.style.display = 'block';
  this.style.display = 'none';
}

btnClos.onclick = function(){
  navBar.style.display = 'none';
  btnMenu.style.display = 'block';
  btnClos.style.display = 'none';
}






// ScrollReveal().reveal('.main', { delay: 500, reset: true });
// ScrollReveal().reveal('.exper-carts', { delay: 500, reset: true });
// ScrollReveal().reveal('.about', { delay: 510, reset: true });
// ScrollReveal().reveal('.skills', { delay: 500, reset: true });
// ScrollReveal().reveal('.Projects', { delay: 500, reset: true });
// ScrollReveal().reveal('.content', { delay: 500, reset: true });
//ScrollReveal().reveal('.end', { delay: 500, reset: true });