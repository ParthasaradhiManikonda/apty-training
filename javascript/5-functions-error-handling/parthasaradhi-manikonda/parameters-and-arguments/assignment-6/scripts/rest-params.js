function calculateSum(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

document.getElementById("sumForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const input = document.getElementById("numberInput").value;

  const numberArray = input
    .split(",")
    .map(item => parseFloat(item.trim()))
    .filter(num => !isNaN(num));

  const total = calculateSum(...numberArray);

  document.getElementById("result").textContent = "Sum: " + total;
});
