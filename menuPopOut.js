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
const overlay = document.getElementById('backgroundOverlay');

// click events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target === overlay) {
        modal.style.display = 'none';
    }
})

// form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
