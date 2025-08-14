let countdownInterval;

function startCountdown() {
const seconds = parseInt(
    document.getElementById("countdownInput").value
);
if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
}

let remaining = seconds;
updateCountdownDisplay(remaining);

clearInterval(countdownInterval);
countdownInterval = setInterval(() => {
    remaining--;
    updateCountdownDisplay(remaining);

    if (remaining <= 0) {
    clearInterval(countdownInterval);
    countdownEnd();
    }
}, 1000);
}

function updateCountdownDisplay(sec) {
const min = String(Math.floor(sec / 60)).padStart(2, "0");
const s = String(sec % 60).padStart(2, "0");
document.getElementById("countdownDisplay").textContent = `${min}:${s}`;
}

function countdownEnd() {
document.getElementById("countdownDisplay").textContent = "TIME UP!";
setTimeout(() => alert("Countdown Finished!"), 1000);
}


let stopwatchInterval;
let elapsedSeconds = 0;

function startStopwatch() {
if (stopwatchInterval) return; // Prevent multiple intervals
stopwatchInterval = setInterval(() => {
    elapsedSeconds++;
    updateStopwatchDisplay();
}, 1000);
}

function stopStopwatch() {
clearInterval(stopwatchInterval);
stopwatchInterval = null;
}

function resetStopwatch() {
stopStopwatch();
elapsedSeconds = 0;
updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
const min = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
const s = String(elapsedSeconds % 60).padStart(2, "0");
document.getElementById("stopwatchDisplay").textContent = `${min}:${s}`;
}