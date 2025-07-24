let inputNum1 = document.getElementById("input-number-1");
let inputNum2 = document.getElementById("input-number-2");
let resultEl = document.getElementById("result");

let additionBtn = document.getElementById("addition");
let subtractionBtn = document.getElementById("subtraction");
let multiplicationBtn = document.getElementById("multiplication");
let divisionBtn = document.getElementById("division");
let modulusBtn = document.getElementById("modulus");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");

function getInputs() {
    return [parseFloat(inputNum1.value), parseFloat(inputNum2.value)];
}

additionBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} + ${num2} is ${num1+num2}`;

});

subtractionBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} - ${num2} is ${num1-num2}`;

});

multiplicationBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} * ${num2} is ${num1*num2}`;
});

divisionBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} / ${num2} is ${num1/num2}`;

});

modulusBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} % ${num2} is ${num1%num2}`;

});

incrementBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1}++ is ${num1 + 1}, and ${num2}++ is ${num2 + 1}`;
});

decrementBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1}-- is ${num1 - 1}, and ${num2}-- is ${num2 - 1}`;
});

