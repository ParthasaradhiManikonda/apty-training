document.getElementById("rectangleForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const lengthInput = document.getElementById("lengthInput").value;
  const widthInput = document.getElementById("widthInput").value;

  const length = parseFloat(lengthInput) || 5;
  const width = parseFloat(widthInput) || 3;

  function calculatePerimeter(len = 5, wid = 3) {
    const perimeter = 2 * (len + wid);

    function calculateArea() {
      return len * wid;
    }

    const area = calculateArea();

    document.getElementById("perimeterResult").textContent = "Perimeter: " + perimeter;
    document.getElementById("areaResult").textContent = "Area: " + area;
  }

  calculatePerimeter(length, width);
});
