const arrayInput = document.getElementById("arrayInput");
const chunkSize = document.getElementById("chunkSize");
const chunkBtn = document.getElementById("chunkBtn");
const output = document.getElementById("output");

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunkBtn.addEventListener("click", () => {
  const inputArray = arrayInput.value
    .split(",")
    .map((val) => val.trim())
    .filter((val) => val !== "")
    .map(Number); 

  const size = parseInt(chunkSize.value);

  if (inputArray.length === 0 || isNaN(size) || size <= 0) {
    alert("Please enter valid array values and a chunk size > 0.");
    return;
  }

  const chunked = chunkArray(inputArray, size);
  output.innerHTML = `<strong>Output:</strong> ${JSON.stringify(chunked)}`;
});
