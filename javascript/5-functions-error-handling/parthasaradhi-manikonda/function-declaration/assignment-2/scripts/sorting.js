const sortArray = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const input = document.getElementById("numberInput").value;
  const originalArray = input.split(",").map(function(item) {
    return parseFloat(item.trim());
  });

  const beforeArray = originalArray.slice();
  const sortedArray = sortArray(originalArray);

  document.getElementById("beforeSort").textContent = beforeArray.join(", ");
  document.getElementById("afterSort").textContent = sortedArray.join(", ");
});
