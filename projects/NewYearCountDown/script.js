const dayEl = document.getElementById('day');
const monthEl = document.getElementById('month');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const hourEl = document.getElementById('hour');

const newYear = new Date("Jan 1, 2026 00:00:00").getTime();

function updateTime() {
  const now = new Date().getTime();
  const gap = newYear - now;

  // time values in milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;

  // calculations
  const mo = Math.floor(gap / month);
  const d = Math.floor((gap % month) / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  // display
  monthEl.innerText = mo;
  dayEl.innerText = d;
  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;

  setTimeout(updateTime, 1000);
}

updateTime();
