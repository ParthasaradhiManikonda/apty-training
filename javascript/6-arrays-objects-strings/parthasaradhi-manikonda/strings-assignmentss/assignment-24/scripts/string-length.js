const inputEl = document.getElementById("inputString");
const resultBtn = document.getElementById("resultBtn");
const outputEl = document.getElementById("output");

resultBtn.addEventListener("click", function () {
    const inputString = inputEl.value.trim().split(" ");
    let result = "";

    for (let word of inputString) {
        let length = word.length;
        result += `${word}: length =  ${length}\n`;
    }

    outputEl.textContent = result;
});
