const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const chooseTime = document.getElementById("choose-time");

let timeLeft = 1500;
let interval;

function updateTimer(){
  const minutes = (Math.floor(timeLeft/60)).toString();
  const seconds = (timeLeft%60).toString();

  timer.innerHTML = `${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`
}

var intervalExits = false;
function startTimer(){
  if(!intervalExits){
    intervalExits= true;
    interval = setInterval(function (){
    timeLeft--;
    updateTimer();

    if(timeLeft === 0){
      clearInterval(interval);
      var audio = new Audio("./sounds/timeout.mp3");
      audio.play();
      timeLeft = 1500;
      updateTimer();
    }

  },1000)
  }


}

function stopTimer(){
  clearInterval(interval);
  intervalExits=false;
}

function resetTimer(){
  clearInterval(interval);
  timeLeft=1500;
  updateTimer();
  intervalExits=false;

}
function timeSelect(){
  clearInterval(interval);
  const timeLeftInMin = Number(prompt("Enter Minutes : "));
  timeLeft = timeLeftInMin * 60;
  timer.innerHTML =`${timeLeftInMin}:00`;
  intervalExits=false;
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);
chooseTime.addEventListener("click",timeSelect);