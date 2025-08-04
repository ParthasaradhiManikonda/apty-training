function createCachedFactorial() {
  const cache = {};

  function recursiveFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    }
    const result = n * recursiveFactorial(n - 1);
    cache[n] = result;
    return result;
  }

  return function(n) {
    if (cache[n]) {
      return { value: cache[n], cached: true };
    }
    const value = recursiveFactorial(n);
    return { value: value, cached: false };
  };
}

const factorial = createCachedFactorial();

const input = document.getElementById("numberInput");
const button = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const num = parseInt(input.value);

  if (isNaN(num) || num < 0) {
    resultDiv.textContent = "Please enter a valid non-negative integer.";
    return;
  }

  const { value, cached } = factorial(num);
  const label = cached ? "Cached Result" : "Computed Result";

  resultDiv.textContent = `Factorial of ${num} is ${value} (${label})`;
});