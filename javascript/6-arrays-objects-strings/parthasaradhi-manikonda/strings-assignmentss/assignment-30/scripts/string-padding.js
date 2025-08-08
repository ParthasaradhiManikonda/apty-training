function padString() {
    const str = document.getElementById("inputStr").value;

    if (!str) {
        document.getElementById("output").textContent =
        "Please enter a string.";
        return;
    }

    const padded = str.padStart(10, "0"); 
    document.getElementById("output").textContent = padded;
      }