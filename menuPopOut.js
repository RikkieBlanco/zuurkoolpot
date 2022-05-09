const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    dropDown.classList.toggle("active");
})

// modal items

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.lijst-btn');
const closeBtn = document.querySelector('.close-btn');

// click events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})