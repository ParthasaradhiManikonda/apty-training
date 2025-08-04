const jsonForm = document.getElementById("jsonForm");
const jsonInput = document.getElementById("jsonInput");
const outputDiv = document.getElementById("output");

function parseJSON(jsonStr) {
  outputDiv.innerHTML = "";

  try {
    const parsed = JSON.parse(jsonStr);
    outputDiv.innerHTML = `Parsed successfully:<pre>${JSON.stringify(parsed, null, 2)}</pre>`;
    outputDiv.style.color = "green"; 
  } catch (e) {
    const errorMessage = "Invalid JSON: " + e.message;
    outputDiv.textContent = errorMessage; 
    outputDiv.style.color = "red"; 
  }
}

jsonForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = jsonInput.value.trim();
  parseJSON(input);
});