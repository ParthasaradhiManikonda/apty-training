 const inputNum = document.getElementById("input-number");
    const resultBtn = document.getElementById("generate-btn");
    const resultEl = document.getElementById("result-text");

    function fibonacci(n) {
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

    resultBtn.addEventListener("click", function () {
      const inputNumVal = parseInt(inputNum.value);
      if (isNaN(inputNumVal) || inputNumVal < 0) {
        resultEl.textContent = "Please enter a valid number.";
        return;
      }

      let resultSeries = [];    
      for (let i = 0; i < inputNumVal; i++) {
        resultSeries.push(fibonacci(i));
      }

      resultEl.textContent = `Fibonacci series for the number ${inputNumVal}: ${resultSeries.join(", ")}`;
    });