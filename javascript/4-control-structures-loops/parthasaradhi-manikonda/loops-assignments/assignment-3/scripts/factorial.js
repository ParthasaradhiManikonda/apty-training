let inputNumber = document.getElementById("input");
let resultEl = document.getElementById("result");
let generateBtn = document.getElementById("generate-button");

generateBtn.addEventListener("click", function () {
  let resultNum = parseInt(inputNumber.value);

  if (isNaN(resultNum) || resultNum < 0) {
    resultEl.textContent = "Please enter a non-negative number.";
    return;
  }

  let i = 1;
  let factorial = 1;
  let stepsHTML = "<strong>Calculation Steps:</strong><br>";

  do {
    let prevFactorial = factorial;         
    factorial *= i;                        
    stepsHTML += `${prevFactorial} * ${i} = ${factorial}<br>`;  
    i++;
  } while (i <= resultNum);

  stepsHTML += `<br><strong>Final Result:</strong> ${resultNum}! = ${factorial}`;
  resultEl.innerHTML = stepsHTML;
});
