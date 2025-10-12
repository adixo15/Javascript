const month=document.querySelector(".date h1")
const fulldate=document.querySelector(".date p")
const day=document.querySelector(".days")
const monthInx=new Date().getMonth()
console.log(monthInx)
const lastday=new Date(new Date().getFullYear(),monthInx + 1,0).getDate()
const firstday=new Date(new Date().getFullYear(),monthInx,1).getDay()-1
console.log(lastday)
console.log(firstday)
const months=[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
month.innerText=months[monthInx]
fulldate.innerText=new Date().toDateString()
let days = "";

// Add empty divs for days before the first day of the month
for (let i = 0; i < firstday; i++) {
    days += `<div class="empty"></div>`;
}

// Add actual days of the month
for (let i = 1; i <= lastday; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`; // highlight today
    } else {
        days += `<div>${i}</div>`;
    }
}

day.innerHTML = days;
