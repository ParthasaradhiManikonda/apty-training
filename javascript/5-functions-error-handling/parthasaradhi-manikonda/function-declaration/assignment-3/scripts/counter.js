const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterElement = document.getElementById("count");

let counterElementValue = parseInt(counterElement.textContent);


incrementBtn.addEventListener("click", ()=> {
    counterElementValue = counterElementValue + 1;
    counterElement.textContent = counterElementValue; 
});

decrementBtn.addEventListener("click", ()=> {
    counterElementValue = counterElementValue - 1;
    counterElement.textContent = counterElementValue;
});