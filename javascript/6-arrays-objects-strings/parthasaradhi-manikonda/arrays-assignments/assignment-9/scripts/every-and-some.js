const students = [];
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const checkBtn = document.getElementById("checkBtn");
const studentList = document.getElementById("studentList");
const result = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);

  if (name === "" || isNaN(score)) {
    alert("Please enter both name and score.");
    return;
  }

  students.push({ name, score });

  const li = document.createElement("li");
  li.textContent = `${name}: ${score}`;
  studentList.appendChild(li);

  nameInput.value = "";
  scoreInput.value = "";
});

checkBtn.addEventListener("click", () => {
  const allPassed = students.every(student => student.score > 35);
  const someFailed = students.some(student => student.score < 35);

  if (students.length === 0) {
    result.textContent = "No students to check.";
  } else if (allPassed) {
    result.textContent = "All Students Passed";
  } else if (someFailed) {
    result.textContent = "Some Students Failed";
  } else {
    result.textContent = "Unknown Status";
  }
});
