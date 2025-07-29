let resultEl = document.getElementById("result");
let stringInput=prompt("Enter the string");
let inputString=document.getElementById("input-string");
inputString.textContent=`The entered string is ==> ${stringInput}`;
let outputString=document.getElementById("result");
let stringArray=stringInput.split("");
console.log(stringArray);
let frequency = {}
for (let index in stringArray){
    let char=stringArray[index];
    if(frequency[char]){
        frequency[char]++
    }else{
        frequency[char]=1;
    }
}
let output="";
for (let char in frequency){
    output+=`${char}: ${frequency[char]}<br>`
}
outputString.innerHTML=output;

