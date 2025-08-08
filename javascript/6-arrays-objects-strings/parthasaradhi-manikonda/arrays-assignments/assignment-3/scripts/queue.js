const queue = [];
const input = document.getElementById("queueInput");
const enqueueBtn = document.getElementById("enqueueBtn");
const dequeueBtn = document.getElementById("dequeueBtn");
const frontBtn = document.getElementById("frontBtn");
const enqueueResult = document.getElementById("enqueueResult");
const dequeueResult = document.getElementById("dequeueResult");
const frontResult = document.getElementById("frontResult");

function enqueue(element) {
  queue.unshift(element); 
}

function dequeue() {
  if (isEmpty()) return "Queue Underflow";
  return queue.pop();
}

function peek() {
  if (isEmpty()) return "Queue is empty";
  return queue[queue.length - 1]; 
}

function isEmpty() {
  return queue.length === 0;
}

function printQueue() {
  return queue.slice().reverse().join(" → "); 
}

enqueueBtn.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    enqueueResult.textContent = "Please enter a number.";
    return;
  }

  enqueue(Number(value));
  enqueueResult.textContent = `Added ${value} → Queue: ${printQueue()}`;
  input.value = "";
  dequeueResult.textContent = "";
  frontResult.textContent = "";
});

dequeueBtn.addEventListener("click", () => {
  const removed = dequeue();
  if (removed === "Queue Underflow") {
    dequeueResult.textContent = "Queue is empty.";
  } else {
    dequeueResult.textContent = `Removed: ${removed} → Queue: ${printQueue()}`;
  }
  enqueueResult.textContent = "";
  frontResult.textContent = "";
});

frontBtn.addEventListener("click", () => {
  const front = peek();
  if (front === "Queue is empty") {
    frontResult.textContent = "Queue is empty.";
  } else {
    frontResult.textContent = `Next element to be removed is: ${front}`;
  }
  enqueueResult.textContent = "";
  dequeueResult.textContent = "";
});
