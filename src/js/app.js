import "../css/main.scss";
import { jump } from "./jump";

document.addEventListener("DOMContentLoaded", function() {
  // variables
  var navOffset = 149; // 70+80-1
  var menuToggleButton = document.querySelector(".navbar__hamburger");
  var menuElement = document.querySelector(".navbar__menu");
  var navBarElement = document.querySelector('.navbar');
  var navLinks = document.querySelectorAll('.smooth-scroll');
  var contactForm = document.querySelector('.contact__form');

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

  // sticky menu
  document.addEventListener('scroll', function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    scrollPosition > navOffset ? navBarElement.classList.add('navbar--detached') : navBarElement.classList.remove('navbar--detached');
  });

  //contact form
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // TODO form validation
  });
});
