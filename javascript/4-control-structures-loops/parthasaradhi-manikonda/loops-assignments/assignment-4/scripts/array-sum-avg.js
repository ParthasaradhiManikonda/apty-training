let inputText = document.getElementById("array-input");
let resultBtn = document.getElementById("generateBtn");
let resultText = document.getElementById("result");
resultBtn.addEventListener("click",function(){
    let splitText = inputText.value;
    let numsArray=splitText.split(",").map(function(item){
        return parseFloat(item);
    });
    let sum=0
    let avg=null;
    for (let num of numsArray){
        sum+=num;
    }
    avg=sum/(numsArray.length)

    resultText.innerHTML=`The array is ${numsArray}<br>
    The sum of the array is ${sum}<br>
    The average of the array is ${avg}`;
  
})

