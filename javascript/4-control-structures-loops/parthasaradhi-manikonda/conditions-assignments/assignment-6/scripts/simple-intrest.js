let resultElement = document.getElementById("result");
let checkBtn = document.getElementById("checkbtn");
checkBtn.addEventListener("click",function(){
    let resultText="";
    let principalAmount=parseFloat(document.getElementById("principal-amount").value);
    let Time = parseFloat(document.getElementById("time").value);
    let Intrest = parseFloat(document.getElementById("rate-of-intrest").value);
    if (isNaN(principalAmount)||isNaN(Time)||isNaN(Intrest)){
        resultText="Please enter valid numbers"
    }
    else{
    let simpleIntrest = (principalAmount*Time*Intrest)/100;
    resultText =`Your simple intrest for ${principalAmount} amount, tenure ${Time} years for the intrest ${Intrest} is ${simpleIntrest}`;
    }
    resultElement.textContent=resultText;
})