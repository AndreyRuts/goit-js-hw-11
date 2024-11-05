import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]");
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");
const input = document.querySelector(".timer-input");
let userSelectedDate = null;
let timerId = null;
startBtn.disabled = true;

function start() {      
  input.disabled = true;
  startBtn.disabled = true;
  
  timerId = setInterval(() => {        
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime; 

    if (deltaTime <= 0) {
      clearInterval(timerId);
      iziToast.success({
        title: "OK",
        message: "Countdown finished",
      });    
      return;
    } 
      updateClockface(convertMs(deltaTime));
  }, 1000);   

}

function convertMs(ms) {   
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero (value) {
  return String(value).padStart(2, "0");
}

startBtn.addEventListener("click", start);

function updateClockface({ days, hours, minutes, seconds }) {
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  minute.textContent = addLeadingZero(minutes);
  second.textContent = addLeadingZero(seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      iziToast.error({
        error: "Error",
        message: "Please choose a date in the future",
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);





