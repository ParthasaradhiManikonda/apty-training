const input = document.getElementById("colorInput");
const replaceBtn = document.getElementById("replaceBtn");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const result = document.getElementById("result");

function displayArray(arr) {
  result.textContent = "Updated Array: [" + arr.join(", ") + "]";
}

function getArrayFromInput() {
  return input.value
    .split(",")
    .map(item => item.trim())
    .filter(item => item !== "");
}

replaceBtn.addEventListener("click", () => {
  const colors = getArrayFromInput();
  const index = colors.indexOf("Blue");
  if (index !== -1) {
    colors[index] = "Purple";
    displayArray(colors);
  } else {
    result.textContent = '"Blue" not found in array.';
  }
});

addBtn.addEventListener("click", () => {
  const colors = getArrayFromInput();
  const index = colors.indexOf("Yellow");
  if (index !== -1) {
    colors.splice(index + 1, 0, "Orange"); 
    displayArray(colors);
  } else {
    result.textContent = '"Yellow" not found in array.';
  }
});

removeBtn.addEventListener("click", () => {
  const colors = getArrayFromInput();
  const index = colors.indexOf("Green");
  if (index !== -1) {
    colors.splice(index, 1);
    displayArray(colors);
  } else {
    result.textContent = '"Green" not found in array.';
  }
});
