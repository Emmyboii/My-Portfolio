var typed = new Typed("#text-typing", {
    strings: ["Web Developer,", "Full Stack Developer,", "Web Designer."],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
});

// Sidebar toggle functionality for responsive navbar
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// Optional: Close sidebar when a link is clicked
sidebar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        sidebar.classList.remove("show");
    }
});

const serviceCards = document.querySelectorAll(".works, .works2");

serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
