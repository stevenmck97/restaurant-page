function menu() {
    const container = document.querySelector(".container");

    const header = document.querySelector(".header");
    header.textContent = "Home Page";

    const text = document.querySelector(".about");
    text.textContent =
        text.textContent = `glskjdf lskjfs jfskdljfsdlkfj sldjf slkdfj dfklj`;

    container.appendChild(header);
    container.appendChild(text);
}

export default menu;
