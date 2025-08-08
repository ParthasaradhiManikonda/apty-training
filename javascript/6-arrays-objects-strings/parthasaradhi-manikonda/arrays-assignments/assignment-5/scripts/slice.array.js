const nameInput = document.getElementById("nameInput");
const extractFirstBtn = document.getElementById("extractFirstBtn");
const extractLastBtn = document.getElementById("extractLastBtn");
const firstThreePara = document.getElementById("firstThree");
const lastTwoPara = document.getElementById("lastTwo");

function getNamesArray() {
  const raw = nameInput.value.trim();
  return raw
    .split(",")
    .map(name => name.trim())
    .filter(name => name !== "");
}

extractFirstBtn.addEventListener("click", () => {
  const names = getNamesArray();

  if (names.length === 0) {
    firstThreePara.textContent = "Please enter valid names.";
    return;
  }

  const firstThree = names.slice(0, 3);
  firstThreePara.textContent = "First 3 names: " + firstThree.join(", ");
});

extractLastBtn.addEventListener("click", () => {
  const names = getNamesArray();

  if (names.length === 0) {
    lastTwoPara.textContent = "Please enter valid names.";
    return;
  }

  const lastTwo = names.slice(-2);
  lastTwoPara.textContent = "Last 2 names: " + lastTwo.join(", ");
});
