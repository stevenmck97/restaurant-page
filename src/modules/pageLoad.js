function load() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to my Restaurant!";

    const img = document.createElement("img");
    img.src = "../images/restaurant.jpg";

    const text = document.createElement("p");
    text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(text);
}

export default load;
