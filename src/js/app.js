import "../css/main.scss";
import { jump } from "./jump";

document.addEventListener("DOMContentLoaded", function() {
  // variables
  var menuToggleButton = document.querySelector(".navbar__hamburger");
  var menuElement = document.querySelector(".navbar__menu");
  var navOffset = 140;
  var navLinks = document.querySelectorAll('.smooth-scroll');

  // toggle mobile menu
  menuToggleButton.addEventListener("click", function() {
    menuToggleButton.classList.toggle("navbar__hamburger--close");
    menuElement.classList.toggle("navbar__menu--opened");
  });
  // close mobile menu when link clicked
  menuElement.addEventListener("click", function() {
    menuElement.classList.remove("navbar__menu--opened");
    menuToggleButton.classList.remove("navbar__hamburger--close");
  });

  // smooth scroll (jump.js lib)
  for (const link of navLinks) {
    link.addEventListener("click", function(e) {
      e.preventDefault(); 
      jump(link.getAttribute("href"), { 
        offset: -navOffset
      });
    });
  }
});
