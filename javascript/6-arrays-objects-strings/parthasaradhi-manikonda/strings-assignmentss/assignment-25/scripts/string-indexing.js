const inputEl = document.getElementById("inputString");
const resultBtn = document.getElementById("resultBtn");
const outputEl = document.getElementById("output");

resultBtn.addEventListener("click", () => {
  const inputValue = inputEl.value;
  if (inputValue.length === 0) {
    outputEl.textContent = "Please enter a string.";
  } else {
    const firstChar = inputValue[0];
    const lastChar = inputValue[inputValue.length - 1];
    outputEl.textContent = `First character is '${firstChar}' and last character is '${lastChar}'`;
  }
});
