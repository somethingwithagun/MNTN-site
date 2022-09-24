"use strict"

const burger = document.getElementById("burger");
const menuBurger = document.getElementById("menu__burger");
const navMenu = document.getElementById("nav-menu");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

burger.addEventListener("click", burgerToggle);
function burgerToggle() {
  burger.classList.toggle("_active");
  menuBurger.classList.toggle("_active"); 
  navMenu.classList.toggle("_active"); 
  main.classList.toggle("_active");
  footer.classList.toggle("_active");
}