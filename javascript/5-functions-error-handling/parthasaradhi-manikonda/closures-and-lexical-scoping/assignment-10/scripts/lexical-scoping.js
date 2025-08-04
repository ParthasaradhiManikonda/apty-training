const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const thirdInput = document.getElementById("thirdInput");
const generateBtn = document.getElementById("generateBtn");
const outputDiv = document.getElementById("output");

function outer(first) {
  return function middle(second) {
    return function inner(third) {
      return `${first}${second}${third}`;
    };
  };
}

generateBtn.addEventListener("click", () => {
  const result = outer(firstInput.value)(secondInput.value)(thirdInput.value);
  outputDiv.textContent = "Output: " + result;
});