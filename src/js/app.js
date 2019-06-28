import '../css/main.scss';

document.addEventListener('DOMContentLoaded', function () {

    // variables
    var menuToggleButton = document.querySelector('.navbar__hamburger');
    var menuUlElement = document.querySelector('.navbar__menu');

    // toggle mobile menu
    menuToggleButton.addEventListener('click', function () {
      menuToggleButton.classList.toggle('navbar__hamburger--close');
      menuUlElement.classList.toggle('navbar__menu--opened');
    });
    // close mobile menu when link clicked
    menuUlElement.addEventListener('click', function () {
      menuUlElement.classList.remove('navbar__menu--opened');
      menuToggleButton.classList.remove('navbar__hamburger--close');
    });
  
  });
