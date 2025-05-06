const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navlinks");
const icon = hamburger.querySelector("i"); // Select the <i> inside hamburger

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle between hamburger and close (x) icon
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});
