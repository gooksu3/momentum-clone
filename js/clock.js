const clock=document.querySelector("h2#clock");

function runningClock(){
    const date=new Date();
    const hour=String(date.getHours()).padStart(2,"0");
    const minute=date.getMinutes().toString().padStart(2,"0");
    const second=date.getSeconds().toString().padStart(2,"0");
    clock.innerText=`${hour}:${minute}:${second}`;
}
runningClock();
setInterval(runningClock,1000);