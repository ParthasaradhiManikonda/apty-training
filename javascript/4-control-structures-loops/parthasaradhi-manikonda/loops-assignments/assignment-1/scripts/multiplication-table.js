let inputNumber = document.getElementById("input");
let generateBtn = document.getElementById("generate-button");
let resultEl = document.getElementById("result");
generateBtn.addEventListener("click",function(){
    inputNumberVal=parseInt(inputNumber.value);
    resultText="";
    for (let i=1;i<11;i++){
        resultText+=`${inputNumberVal} * ${i} = ${inputNumberVal*i}<br>`;
    }
    resultEl.innerHTML=resultText;

})