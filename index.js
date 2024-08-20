// menu toggle

const menuToggle = document.querySelector(".menu-toggle");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links");

openMenu.addEventListener("click", () => {
  closeMenu.classList.toggle("close-menu");
  openMenu.style.display = "none";
  navLinks.style.display = "block";
  openMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("close-menu");
  openMenu.style.display = "block";
  navLinks.style.display = "none";
});
