let checkBtn = document.getElementById("check-result");
let resultElement = document.getElementById("result");

checkBtn.addEventListener("click",function(){
    let inputNumber = parseInt(document.getElementById("input-number").value);
    let resultText="";
    if (isNaN(inputNumber)){
        resultText="Please enter a valid number"
    }
    else if (inputNumber%2===0){
        resultText=`${inputNumber} is an Even number`;
    }
    else {
        resultText=`${inputNumber} is an Odd number`
    }
    resultElement.textContent=resultText;
})