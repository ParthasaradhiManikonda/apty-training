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

// += operator
additionBtn.addEventListener("click", function () {
    let [num1, num2] = getInputs();
    let originalNum1 = num1;
    let originalNum2 = num2;
    num1 += num2;
    resultEl.textContent = `The result of ${originalNum1} += ${originalNum2} is ${num1}`;
});

// -= operator
subtractionBtn.addEventListener("click", function () {
    let [num1, num2] = getInputs();
    let originalNum1 = num1;
    let originalNum2 = num2;
    num1 -= num2;
    resultEl.textContent = `The result of ${originalNum1} -= ${originalNum2} is ${num1}`;
});

// *= operator
multiplicationBtn.addEventListener("click", function () {
    let [num1, num2] = getInputs();
    let originalNum1 = num1;
    let originalNum2 = num2;
    num1 *= num2;
    resultEl.textContent = `The result of ${originalNum1} *= ${originalNum2} is ${num1}`;
});

// /= operator
divisionBtn.addEventListener("click", function () {
    let [num1, num2] = getInputs();
    let originalNum1 = num1;
    let originalNum2 = num2;
    num1 /= num2;
    resultEl.textContent = `The result of ${originalNum1} /= ${originalNum2} is ${num1}`;
});

// %= operator
modulusBtn.addEventListener("click", function () {
    let [num1, num2] = getInputs();
    let originalNum1 = num1;
    let originalNum2 = num2;
    num1 %= num2;
    resultEl.textContent = `The result of ${originalNum1} %= ${originalNum2} is ${num1}`;
});

// ++ operator
incrementBtn.addEventListener("click", function () {
    let num1 = parseFloat(inputNum1.value);
    let originalNum1 = num1;
    num1++;
    resultEl.textContent = `The result of ${originalNum1}++ is ${num1}`;
});

// -- operator
decrementBtn.addEventListener("click", function () {
    let num1 = parseFloat(inputNum1.value);
    let originalNum1 = num1;
    num1--;
    resultEl.textContent = `The result of ${originalNum1}-- is ${num1}`;
});
