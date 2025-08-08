const students = [];

const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const sortBtn = document.getElementById("sortBtn");
const output = document.getElementById("output");

function displayOutput(array) {
  output.innerHTML = `<strong>Output:</strong> ${JSON.stringify(array)}`;
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);

  if (name === "" || isNaN(score)) {
    alert("Please enter both name and score.");
    return;
  }

  students.push({ name, score });
  nameInput.value = "";
  scoreInput.value = "";

  displayOutput(students);
});

sortBtn.addEventListener("click", () => {
  const sorted = [...students].sort((a, b) => b.score - a.score);
  displayOutput(sorted);
});
