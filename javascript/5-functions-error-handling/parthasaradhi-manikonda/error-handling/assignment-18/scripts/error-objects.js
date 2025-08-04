function withdrawAmount(balance, amount) {
  const accBalance = Number(balance);
  const withdrawAmt = Number(amount);

  if (isNaN(accBalance) || isNaN(withdrawAmt)) {
    const error = new Error("Invalid numeric input.");
    error.errorCode = 400;
    throw error;
  }

  if (withdrawAmt <= 0) {
    const error = new Error("Withdrawal amount must be greater than zero.");
    error.errorCode = 405;
    throw error;
  }

  if (withdrawAmt > accBalance) {
    const error = new Error("Insufficient balance for withdrawal.");
    error.errorCode = 404;
    throw error;
  }

  return accBalance - withdrawAmt;
}

document.getElementById("bankForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const balanceInput = document.getElementById("balance").value.trim();
    const withdrawalInput = document.getElementById("withdrawal").value.trim();
    const outputDiv = document.getElementById("output");

    outputDiv.textContent = "";
    outputDiv.style.color = "black";

    try {
    const remaining = withdrawAmount(balanceInput, withdrawalInput);
    outputDiv.textContent = `Withdrawal successful. Remaining balance: ₹${remaining}`;
    outputDiv.style.color = "green";
    } catch (err) {
    outputDiv.textContent = `Error [${err.errorCode}]: ${err.message}`;
    outputDiv.style.color = "red";
    }
});
