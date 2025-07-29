let inputNumber = document.getElementById("input");
let resultEl = document.getElementById("result");
let generateBtn = document.getElementById("generate-button");

generateBtn.addEventListener("click", function () {
    let resultNum = parseInt(inputNumber.value);
    let i = 1;
    let add = 0;

    while (i <= resultNum) {
        add += i;
        i++;
    }

    resultEl.textContent = add;
});
