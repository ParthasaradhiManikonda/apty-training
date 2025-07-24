let inputNum1 = document.getElementById("input-number-1");
let inputNum2 = document.getElementById("input-number-2");
let resultEl = document.getElementById("result");

let betwiseAndBtn = document.getElementById("betwiseAnd");
let betwiseOrBtn = document.getElementById("betwiseOr");
let betwiseXorBtn = document.getElementById("betwiseXor");
let betwiseNotBtn = document.getElementById("betwiseNot");
let betwiseLshiftBtn = document.getElementById("betwiseLshift");
let betwiseRshiftBtn = document.getElementById("betwiseRshift");
let betwiseUnsignedRshiftBtn = document.getElementById("betwiseUnsignedRshift");

function getInputs() {
    return [parseFloat(inputNum1.value), parseFloat(inputNum2.value)];
}

betwiseAndBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} & ${num2} is ${num1&num2}`;

});

betwiseOrBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} | ${num2} is ${num1|num2}`;

});

betwiseXorBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} ^ ${num2} is ${num1^num2}`;
});

betwiseNotBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ~${num1} is ${~num1}, and ~${num2} is ${~num2}`;

});

betwiseLshiftBtn.addEventListener("click", function () {
    const [num1, num2] = getInputs();
    resultEl.textContent = `The result of ${num1} << ${num2} is ${num1<<num2}`;

});

betwiseRshiftBtn.addEventListener("click", function () {
    const [num1,num2] = getInputs();
    resultEl.textContent = `The result of ${num1} >> ${num2} is ${num1>>num2}`;

});

betwiseUnsignedRshiftBtn.addEventListener("click", function () {
    const [num1,num2] = getInputs();;
    resultEl.textContent = `The result of ${num1}>>>${num2} is ${num1>>>num2}`;

});
