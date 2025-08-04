    const numbers = [10, 25, 5, 18, 30, 7, 3];

    function filterWithCallback(arr, callback) {
      return arr.filter(callback);
    }

    const filterBtn = document.getElementById("filterBtn");
    const limitInput = document.getElementById("limit");
    const resultDiv = document.getElementById("result");

    filterBtn.addEventListener("click", () => {
      const limit = parseInt(limitInput.value);

      if (isNaN(limit)) {
        resultDiv.textContent = " Please enter a valid number.";
        return;
      }

      const filtered = filterWithCallback(
        numbers,
        (num) => num <= limit
      );

      resultDiv.innerHTML = ` Filtered array (<= ${limit}): <strong>[${filtered.join(
        ", "
      )}]</strong>`;
    });
