function flatten(array) {
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
document.getElementById("flattenBtn").addEventListener("click", () => {
  const input = document.getElementById("arrayInput").value.trim();
  const outputDiv = document.getElementById("output");

  try {
    const parsedArray = JSON.parse(input);

    if (!Array.isArray(parsedArray)) {
      throw new Error("Input is not a valid array.");
    }
    const flattened = flatten(parsedArray);
    outputDiv.textContent = "Flattened Array: [" + flattened.join(", ") + "]";
  } catch (error) {
    outputDiv.textContent = "Error: Invalid input format. Please enter a valid nested array.";
  }
});