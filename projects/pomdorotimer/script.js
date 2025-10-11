const timer=document.getElementById('timer')
const start=document.getElementById('start')
const stop=document.getElementById('stop')
const reset=document.getElementById('reset')
let timeleft=1500
let interval
function updateTime(){
    let minutes=Math.floor(timeleft/60)
    let seconds=timeleft%60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
    timer.innerHTML=formattedTime
}
function startTime(){
   interval=setInterval(()=>{
     timeleft--
     updateTime()
     if(timeleft==0){
     clearInterval(interval)
     alert(`Time is up`)
     timeleft=1500
     updateTime()
     }
   },1000)
}
function stopTime(){
    clearInterval(interval)
}
function resetTime(){
    clearInterval(interval)
    timeleft=1500
    updateTime()
}
start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);
