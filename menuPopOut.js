const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    dropDown.classList.toggle("active");
})