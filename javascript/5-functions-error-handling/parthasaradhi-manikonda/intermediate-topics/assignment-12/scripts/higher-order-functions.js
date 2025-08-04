const countInput = document.getElementById("count");
const contentInput = document.getElementById("content");
const generateBtn = document.getElementById("generateBtn");
const listContainer = document.getElementById("listContainer");

function repeatAction(actionFn, n) {
  for (let i = 0; i < n; i++) {
    actionFn(i);
  }
}

generateBtn.addEventListener("click", () => {
  const count = parseInt(countInput.value);
  const content = contentInput.value;

  if (isNaN(count) || count < 1) {
    alert("Please enter a number greater than 0.");
    return; 
  }

  listContainer.innerHTML = "";

  repeatAction((i) => {
    const li = document.createElement("li");
    li.textContent = `${content} ${i + 1}`;
    listContainer.appendChild(li);
  }, count);
});