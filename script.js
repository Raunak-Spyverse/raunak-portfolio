const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

const toggleMenu = () => {
    menu.classList.toggle('bx-x'); 
    nav.classList.toggle('active'); 
    document.body.classList.toggle('no-scroll'); 
};

menu.addEventListener("click", toggleMenu);

nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        toggleMenu(); 
    }
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove("active");
        menu.classList.remove("bx-x");
        document.body.classList.remove("no-scroll");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menu.classList.remove("bx-x");
        document.body.classList.remove("no-scroll");
    }
});