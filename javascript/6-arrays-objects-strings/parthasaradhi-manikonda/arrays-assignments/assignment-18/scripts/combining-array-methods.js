const resultBtn = document.getElementById("resultBtn");
const outputEl = document.getElementById("output");
const inputArrayEl = document.getElementById("inputArray");

resultBtn.addEventListener("click", () => {
    const inputString = inputArrayEl.value;

    const numbersArr = inputString
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "" && !isNaN(Number(item)))
        .map(Number);

    if (numbersArr.length === 0) {
        outputEl.textContent = "Please add valid numbers into array";
        return;
    }

    const resultSum = numbersArr
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((sum, num) => sum + num, 0);

    outputEl.textContent = `Original array: [${numbersArr.join(", ")}] Result: ${resultSum}`;
});