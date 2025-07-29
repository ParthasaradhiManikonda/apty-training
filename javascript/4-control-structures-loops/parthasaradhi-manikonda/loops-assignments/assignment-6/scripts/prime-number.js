let resultBtn = document.getElementById("resultBtn");

resultBtn.addEventListener("click", function () {
  let startNum = parseInt(document.getElementById("start-number").value);
  let endNum = parseInt(document.getElementById("end-number").value);
  let output = document.getElementById("result");

  let primes = [];

  for (let i = startNum; i <= endNum; i++) {
    if (i < 2) continue;

    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  output.innerHTML = `Prime numbers between ${startNum} and ${endNum} are:<br>${primes.join(", ")}`;
});
