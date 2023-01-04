const menuIconElement = document.getElementById("menu_icon");
const menuElement = document.getElementById("menu");
const closeMenuElement = document.getElementById("close_menu_icon");
const links = document.getElementById("nav_items");

menuIconElement.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  document.body.style.overflowY = "hidden";
});

closeMenuElement.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  document.body.style.overflowY = "scroll";
});

links.addEventListener("click", () => {
  document.body.style.overflowY = "scroll";
  menu.classList.toggle("show-menu");
});
