let checkBtn = document.getElementById("check-largest-number");
let largestNum = document.getElementById("largest-number-result");

checkBtn.addEventListener("click", function () {
  let number1 = parseFloat(document.getElementById("number-1").value);
  let number2 = parseFloat(document.getElementById("number-2").value);
  let number3 = parseFloat(document.getElementById("number-3").value);
  let result = "";

  if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    result = "Please enter all 3 valid numbers.";
   } else if (number1===number2 && number2===number3){
      result="All are equal";
    }
   else if (number1 >= number2 && number1 >= number3) {
    result = "Number 1 is greatest";
  } else if (number2 >= number1 && number2 >= number3) {
    result = "Number 2 is greatest";
  } else if (number3 >= number1 && number3 >= number2) {
    result = "Number 3 is greatest";
  } 

  largestNum.textContent = result;
});
