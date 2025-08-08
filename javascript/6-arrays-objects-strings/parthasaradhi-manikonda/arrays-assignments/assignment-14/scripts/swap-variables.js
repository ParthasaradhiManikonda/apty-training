const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const swapBtn = document.getElementById("swapBtn");
const output = document.getElementById("output");

swapBtn.addEventListener("click", () => {
  let a = Number(aInput.value);
  let b = Number(bInput.value);

  [a, b] = [b, a];

  output.innerHTML = `<strong>Output:</strong> a = ${a}, b = ${b}`;
});
