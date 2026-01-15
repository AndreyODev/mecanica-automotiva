// NAVBAR - MENU
const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
	menuMobile.classList.add("active");
});

closeMenu.addEventListener("click", () => {
	menuMobile.classList.remove("active");
});
