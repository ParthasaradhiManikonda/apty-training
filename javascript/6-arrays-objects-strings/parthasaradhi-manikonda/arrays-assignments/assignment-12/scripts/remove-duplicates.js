const arrayInput = document.getElementById("arrayInput");
const removeBtn = document.getElementById("removeBtn");
const output = document.getElementById("output");

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

removeBtn.addEventListener("click", () => {
  const inputArray = arrayInput.value
    .split(",")
    .map(val => val.trim())
    .filter(val => val !== "")
    .map(Number);

  if (inputArray.length === 0 || inputArray.some(isNaN)) {
    alert("Please enter a valid list of numbers.");
    return;
  }

  const uniqueArray = removeDuplicates(inputArray);
  output.innerHTML = `<strong>Output:</strong> ${JSON.stringify(uniqueArray)}`;
});
