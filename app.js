const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let number = document.querySelector("p");
let myTimer;

let time = 100;
number.textContent = time;

// start the counter
function startTheCounter() {
  time--;
  if (time === 0) {
    clearInterval(myTimer);
  }
  number.textContent = time;
}

// Event
start.addEventListener("click", () => {
  myTimer = setInterval(startTheCounter, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(myTimer);
});
reset.addEventListener("click", () => {
  time = 100;
  clearInterval(myTimer);
  number.textContent = time;
});
