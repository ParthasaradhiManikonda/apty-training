const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const scrollToBtn = document.getElementById("scrollToBtn");
const scrollUpBtn = document.getElementById("scrollUpBtn");
const scrollDownBtn = document.getElementById("scrollDownBtn");

scrollToBtn.addEventListener("click", () => {
  const x = parseFloat(xInput.value) || 0; 
  const y = parseFloat(yInput.value) || 0; 
  window.scrollTo({
    left: x,
    top: y,
    behavior: "smooth", 
  });
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollBy({
    top: -10, 
    behavior: "smooth",
  });
});

scrollDownBtn.addEventListener("click", () => {
  window.scrollBy({
    top: 10, 
    behavior: "smooth", 
  });
});

window.onload = () => {
  xInput.value = 0;
  yInput.value = 500;
};