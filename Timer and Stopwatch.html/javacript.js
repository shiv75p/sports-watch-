var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var millisecondsLabel = document.getElementById("milliseconds");
var totalMilliseconds = 0;
var timer;

function updateTime() {
  totalMilliseconds += 10;
  var minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
  var seconds = Math.floor((totalMilliseconds / 1000) % 60);
  var milliseconds = totalMilliseconds % 1000;
  minutesLabel.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  secondsLabel.innerHTML = (seconds < 10 ? '0' : '') + seconds;
  millisecondsLabel.innerHTML = (milliseconds < 100 ? '0' : '') + (milliseconds < 10 ? '0' : '') + milliseconds;
}

function startTimer() {
  timer = setInterval(updateTime, 10);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  totalMilliseconds = 0;
  minutesLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
  millisecondsLabel.innerHTML = "000";
}

document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
