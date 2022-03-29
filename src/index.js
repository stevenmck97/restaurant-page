// alert("Hello World!");
import load from "./modules/page-load";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

function createTabs() {
    const nav = document.querySelector(".nav");

    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");

    btn1.textContent = "Home";
    btn2.textContent = "Menu";
    btn3.textContent = "Contact";

    btn1.addEventListener("click", home);
    btn2.addEventListener("click", menu);
    btn3.addEventListener("click", contact);

    nav.appendChild(btn1);
    nav.appendChild(btn2);
    nav.appendChild(btn3);
}

(function init() {
    load();
    home();
    createTabs();
})();
