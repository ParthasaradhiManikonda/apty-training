let checkBtn = document.getElementById("check-result");
let yearResult = document.getElementById("year-result");
checkBtn.addEventListener("click",function(){
    let inputValue = parseInt(document.getElementById("year-input").value);
    let resultText="";
    if (isNaN(inputValue)){
        resultText="Enter a valid number"
    }
    else if ((inputValue%4==0) && (inputValue%100!=0)||(inputValue%400==0)){
        resultText = "Leap year"
    }
    else{
        resultText = "Not a Leap year"
    }
    yearResult.textContent=resultText;
})