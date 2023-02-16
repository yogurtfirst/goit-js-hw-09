import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInput = document.getElementById('datetime-picker');
const dayField = document.querySelector("[data-days]");
const hourField = document.querySelector("[data-hours]");
const minuteField = document.querySelector("[data-minutes]");
const secondField = document.querySelector("[data-seconds]");
const btn = document.querySelector("button");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        let now = new Date();
        if (selectedDates[0] < now) {
            Notiflix.Notify.failure('Please choose a date in the future');
            selectedDates[0] = now;
            return;
        };
        btn.disabled = false;
  },
};
flatpickr(dateInput, options);

function setPeriod(days, hours, minutes, seconds) {
    dayField.textContent = String(days).padStart(2,'0');
    hourField.textContent = String(hours).padStart(2,'0');
    minuteField.textContent = String(minutes).padStart(2,'0');
    secondField.textContent = String(seconds).padStart(2,'0');
};

const ss = 1000;
const mm = ss * 60;
const hh = mm * 60;
const dd = hh * 24;

function periodCalc() {
    let now = new Date();
    let period = Date.parse(dateInput.value) - now;
    let days = parseInt(period / dd);
    let hours = parseInt(period % dd / hh);
    let minutes = parseInt(period % dd % hh / mm);
    let seconds = parseInt(period % dd % hh % mm / ss);
    setPeriod(days, hours, minutes, seconds);
};

function onClick() {
    btn.disabled = true;
    setInterval(() => {
        periodCalc();
    }, 1000);
};

btn.disabled = true;
btn.addEventListener('click', onClick);
