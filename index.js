const dialog = document.querySelector("#dialog")
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");

openButton.onclick = () => dialog.showModal();
closeButton.onclick = () => dialog.close();


const fill = document.querySelector(".progress-fill");
const text = document.querySelector("#text");

const word = text.textContent;
text.textContent = "";

[...word].forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    text.appendChild(span);
});

const letters = text.querySelectorAll("span");

let progress = 0;

const frames = 120;
const interval = 3000 / frames;

const progressWidth = 500;

const timer = setInterval(() => {

    progress++;

    fill.style.width = progress + "%";

    const barX = progressWidth * progress / 100;

    letters.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const parentRect = text.getBoundingClientRect();

        const letterX = rect.left - parentRect.left;

        if (barX >= letterX) {
            letter.classList.add("active");
        }
    });

    if (progress >= 100) {
        clearInterval(timer);
    }

}, interval);