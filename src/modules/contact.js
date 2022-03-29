function contact() {
    const container = document.querySelector(".container");

    const header = document.querySelector(".header");
    header.textContent = "Home Page";

    const text = document.querySelector(".about");
    text.textContent = text.textContent = `hello lol`;

    container.appendChild(header);
    container.appendChild(text);
}

export default contact;
