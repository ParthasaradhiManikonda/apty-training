const transposeBtn = document.getElementById("transposeBtn");
const output = document.getElementById("output");
const cells = document.querySelectorAll(".cell");

transposeBtn.addEventListener("click", () => {
  let matrix = [];
  let row = [];

  for (let i = 0; i < cells.length; i++) {
    let value = parseInt(cells[i].value);
    if (isNaN(value)) {
      alert("Please fill all cells with numbers.");
      return;
    }

    row.push(value);
    if ((i + 1) % 3 === 0) {
      matrix.push(row);
      row = [];
    }
  }

  const transposed = transposeMatrix(matrix);
  output.innerHTML = `<strong>Output:</strong> ${JSON.stringify(transposed)}`;
});

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}
