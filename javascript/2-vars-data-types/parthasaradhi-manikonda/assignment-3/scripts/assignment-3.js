document.getElementById("show-btn").addEventListener("click", function () {
  // Declare variables of different types
  const str = "Hello";
  const num = 42;
  const bool = true;
  let undef;
  const nul = null;
  const sym = Symbol("id");
  const obj = { name: "Parthu", age: 22 };

  // Select the output div
  const outputDiv = document.getElementById("output");


  // Append each type 
  outputDiv.innerHTML += `<p>String ("${str}") → <strong>${typeof str}</strong></p>`;
  outputDiv.innerHTML += `<p>Number (${num}) → <strong>${typeof num}</strong></p>`;
  outputDiv.innerHTML += `<p>Boolean (${bool}) → <strong>${typeof bool}</strong></p>`;
  outputDiv.innerHTML += `<p>Undefined → <strong>${typeof undef}</strong></p>`;
  outputDiv.innerHTML += `<p>Null → <strong>${typeof nul}</strong></p>`;
  outputDiv.innerHTML += `<p>Symbol → <strong>${typeof sym}</strong></p>`;
  outputDiv.innerHTML += `<p>Object → <strong>${typeof obj}</strong></p>`;
});
