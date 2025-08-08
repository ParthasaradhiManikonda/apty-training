const arrayInput = document.getElementById("arrayInput");
const findBtn = document.getElementById("findBtn");
const output = document.getElementById("output");


function parseInput(inputStr) {
  return inputStr
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== '' && !isNaN(Number(item)))
    .map(Number);
}
function mostFrequent(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  const frequency = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  for (const val of arr) {
    if (isNaN(val)) continue;

    frequency[val] = (frequency[val] || 0) + 1;

    if (frequency[val] > maxCount) {
      maxCount = frequency[val];
      mostFrequentElement = val;
    }
  }

  return mostFrequentElement;
}

findBtn.addEventListener("click", function () {
  const inputStr = arrayInput.value;
  const arr = parseInput(inputStr);

  if (arr.length === 0) {
    output.textContent = "Output: Please enter a valid comma-separated list of numbers.";
    return;
  }

  const result = mostFrequent(arr);
  output.textContent = `Output: The most frequent element is ${result}.`;
});