const lengthInput = document.getElementById('lengthInput');
const widthInput = document.getElementById('widthInput');
const calculateBtn = document.getElementById('calculateButton');
const result = document.getElementById('result');

function calculateArea(length = 2, width = 4) {
  return length * width;
}

calculateBtn.addEventListener('click', function(event) {
  event.preventDefault(); 

  const lengthVal = parseFloat(lengthInput.value) || undefined;
  const widthVal = parseFloat(widthInput.value) || undefined;

  const area = calculateArea(lengthVal, widthVal);
  result.textContent = `Area: ${area}`;
});
