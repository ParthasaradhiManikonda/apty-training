let inputNum = document.getElementById("pyramid-number-input");
let resultBtn = document.getElementById("resultBtn");
let result = document.getElementById("result");

resultBtn.addEventListener("click", function () {
    let rows = parseInt(inputNum.value);
    let finalOutput = ""; 

    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "* ".repeat(i);
        finalOutput += spaces + stars + "\n"; 
    }

    result.textContent = finalOutput;
});
