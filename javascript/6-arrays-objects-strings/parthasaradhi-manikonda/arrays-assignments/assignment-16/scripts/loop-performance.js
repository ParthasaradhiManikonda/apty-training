
const arrayInput = document.getElementById("arrayInput");
const compareBtn = document.getElementById("compareBtn");
const output = document.getElementById("output");

compareBtn.addEventListener("click", () => {
  const userInput = arrayInput.value;
  const arrStr = userInput.split(',');
  const array = [];

  for (let i = 0; i < arrStr.length; i++) {
    const trimmedStr = arrStr[i].trim();
    if (trimmedStr !== '') {
      const num = Number(trimmedStr);
      if (!isNaN(num)) {
        array.push(num);
      }
    }
  }

  if (array.length === 0) {
    output.innerText = "Please enter a valid numeric array.";
    return;
  }


  let sum1 = 0;
  const startFor = performance.now();
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  const endFor = performance.now();
  const timeFor = endFor - startFor;

  let sum2 = 0;
  const startForOf = performance.now();
  for (const num of array) {
    sum2 += num;
  }
  const endForOf = performance.now();
  const timeForOf = endForOf - startForOf;

  let sum3 = 0;
  const startForEach = performance.now();
  array.forEach((num) => {
    sum3 += num;
  });
  const endForEach = performance.now();
  const timeForEach = endForEach - startForEach;

  output.innerHTML = `
    <strong>Input Array Length:</strong> ${array.length}<br /><br />
    <strong>for loop:</strong> ${timeFor.toFixed(4)} ms<br />
    <strong>for...of loop:</strong> ${timeForOf.toFixed(4)} ms<br />
    <strong>forEach loop:</strong> ${timeForEach.toFixed(4)} ms<br />
  `;
});