const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    dropDown.classList.toggle("active");
})