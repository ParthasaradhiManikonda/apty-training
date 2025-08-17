const localInput = document.getElementById("localInput");
const sessionInput = document.getElementById("sessionInput");
const localDataDisplay = document.getElementById("localData");
const sessionDataDisplay = document.getElementById("sessionData");

window.onload = function () {
  localDataDisplay.textContent =
    localStorage.getItem("myLocalData") || "No data yet";
  sessionDataDisplay.textContent =
    sessionStorage.getItem("mySessionData") || "No data yet";
};

document.getElementById("saveLocal").addEventListener("click", function () {
    const value = localInput.value.trim();
    if (value) {
      localStorage.setItem("myLocalData", value);
      localDataDisplay.textContent = value;
      localInput.value = "";
    }
});

document.getElementById("saveSession").addEventListener("click", function () {
    const value = sessionInput.value.trim();
    if (value) {
      sessionStorage.setItem("mySessionData", value);
      sessionDataDisplay.textContent = value;
      sessionInput.value = "";
    }
});