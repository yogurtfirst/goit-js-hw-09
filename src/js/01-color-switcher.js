const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const bgBase = window.getComputedStyle(body).backgroundColor;
let bgChanger = null;

console.log(bgBase);
console.log(btnStart);
console.log(btnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStop.disabled = true;

btnStart.addEventListener('click', () => {
    bgChanger = setInterval(() => { 
        let color = getRandomHexColor();
        console.log(color);
        body.style.backgroundColor = color;
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
});
btnStart.addEventListener('click', () => {
    clearInterval(bgChanger);
    body.style.backgroundColor = bgBase;
    btnStart.disabled = false;
    btnStop.disabled = true;
});