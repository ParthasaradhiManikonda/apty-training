function handleInput(callback = function(text = "default") {
  return text.toUpperCase();
}) {
  const inputElement = document.getElementById("userInput");
  const outputElement = document.getElementById("output");

  const userText = inputElement.value;
  const result = callback(userText);
  outputElement.textContent = "Processed: " + result;
}

document.getElementById("processBtn").addEventListener("click", function() {
  handleInput(); 
});
