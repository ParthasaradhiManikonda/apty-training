function getRandomColor() {
  return '#' + Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase()
  ).join('');
}

// a) getElementById - Change random text color
function changeRandomColorById() {
  const ids = ['p1', 'p2'];
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  const el = document.getElementById(randomId);
  el.style.color = getRandomColor();
}

// b) getElementsByClassName - Toggle background
function toggleBackgroundByClass() {
  const elements = document.getElementsByClassName('sameClass');
  Array.from(elements).forEach(el => {
    el.classList.toggle('highlight');
  });
}

// c) getElementsByTagName - Change innerHTML
function changeSpanText() {
  const spans = document.getElementsByTagName('span');
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = `Updated Span ${i + 1}`;
  }
}

// d) getElementsByName - Toggle disabled
function toggleDisableByName() {
  const allInputs = document.querySelectorAll('[name]');
  allInputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

// e) querySelector with attribute selector - Add custom attribute
function addNewCustomAttribute() {
  const el = document.querySelector('p[custom-attr="one"]');
  if (el && !el.hasAttribute('new-attr')) {
    el.setAttribute('new-attr', 'added');
    el.textContent += ' (new-attr added)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('changeColorBtn').addEventListener('click', changeRandomColorById);
  document.getElementById('toggleBgBtn').addEventListener('click', toggleBackgroundByClass);
  document.getElementById('changeSpanBtn').addEventListener('click', changeSpanText);
  document.getElementById('toggleDisableBtn').addEventListener('click', toggleDisableByName);
  document.getElementById('addAttrBtn').addEventListener('click', addNewCustomAttribute);
});
