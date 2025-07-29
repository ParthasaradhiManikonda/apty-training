  const marksInput = document.getElementById("marks-input");
    const resultAppend = document.getElementById("grade-result");
    const checkResultButton = document.getElementById("check-results");

    checkResultButton.addEventListener("click", function () {
      const marksScored = parseFloat(marksInput.value);
      let result = "";

      if (marksScored >= 90) {
        result = "A";
      } else if (marksScored >= 75 && marksScored < 90) {
        result = "B";
      } else if (marksScored >= 50 && marksScored < 75) {
        result = "C";
      } else if (marksScored < 50) {
        result = "F";
      } else {
        result = "Invalid input";
      }

      resultAppend.textContent = `Hi, your result is ${result}`;
    });