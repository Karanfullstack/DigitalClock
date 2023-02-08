let hoursEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateClock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM";

    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }
    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;

    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
    ampmEl.innerText = ampm;

    // setTimeOut

    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();