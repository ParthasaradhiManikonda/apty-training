function sortString() {
  const input = document.getElementById("userString").value;
  const sorted = input.split('').sort().join('');
  document.getElementById("result").textContent = sorted;
}
