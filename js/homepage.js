
const nav = document.querySelector(".nav-bar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
console.log(openMenu);
openMenu.addEventListener("click", () => {
    nav.classList.add("show");
});

closeMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
    console.log("hola");
});