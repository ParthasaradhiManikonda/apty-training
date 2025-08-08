const stack = [];

const input = document.getElementById("stackInput");
const pushBtn = document.getElementById("pushNum");
const popBtn = document.getElementById("popNum");
const topBtn = document.getElementById("topElement");

const pushResult = document.getElementById("pushResult");
const popResult = document.getElementById("popResult");
const topResult = document.getElementById("topResult");

function push(element) {
  stack.push(element);
}

function pop() {
  if (isEmpty()) return "Stack Underflow";
  return stack.pop();
}

function peek() {
  if (isEmpty()) return "Stack is empty";
  return stack[stack.length - 1];
}

function isEmpty() {
  return stack.length === 0;
}

function printStack() {
  return stack.join("--");
}

pushBtn.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    pushResult.textContent = "Please enter a number.";
    return;
  }

  push(Number(value));
  pushResult.textContent = `Pushed ${value} → Stack: ${printStack()}`;
  input.value = "";
  popResult.textContent = "";
  topResult.textContent = "";
});

popBtn.addEventListener("click", () => {
  const popped = pop();
  popResult.textContent = popped === "Stack Underflow"? " Stack is empty. ": ` Popped: ${popped} → Stack: ${printStack()}`;
  pushResult.textContent = "";
  topResult.textContent = "";
});

topBtn.addEventListener("click", () => {
  const top = peek();
  topResult.textContent =
    top === "Stack is empty"
      ? " Stack is empty. No top element."
      : `Top element is: ${top}`;
  pushResult.textContent = "";
  popResult.textContent = "";
});
