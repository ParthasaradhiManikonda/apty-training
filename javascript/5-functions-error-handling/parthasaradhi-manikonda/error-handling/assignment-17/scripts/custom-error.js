const calcForm = document.getElementById("calcForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const outputDiv = document.getElementById("output");


function calculate(num1, num2, operator) {
  const a = Number(num1);
  const b = Number(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid number input.");
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    default:
      throw new Error("Unsupported operator.");
  }
}

calcForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = num1Input.value.trim();
  const num2 = num2Input.value.trim();
  const operator = operatorSelect.value;

  outputDiv.textContent = "";

  try {
    const result = calculate(num1, num2, operator);
    outputDiv.textContent = `Result of ${num1} ${operator} ${num2} = ${result}`;
  } catch (err) {
    outputDiv.textContent = `Error: ${err.message}`;
  }
});
