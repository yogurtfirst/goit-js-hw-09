const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const bgBase = window.getComputedStyle(body).backgroundColor;
let bgChanger = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setBgColor() {
    body.style.backgroundColor = getRandomHexColor();
};

function onStart() {
    bgChanger = setInterval(setBgColor, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function onStop(){
    clearInterval(bgChanger);
    body.style.backgroundColor = bgBase;
    btnStart.disabled = false;
    btnStop.disabled = true;
};

btnStop.disabled = true;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);