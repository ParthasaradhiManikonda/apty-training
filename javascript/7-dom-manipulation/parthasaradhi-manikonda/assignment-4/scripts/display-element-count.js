document.addEventListener('DOMContentLoaded', () => {
  const countBtn = document.getElementById('countBtn');
  const resultList = document.getElementById('resultList');

  function countElements() {
    const allElements = document.querySelectorAll('*');

    const counts = {};
    allElements.forEach(el => {
      const tag = el.tagName.toLowerCase();
      counts[tag] = (counts[tag] || 0) + 1;
    });

    resultList.innerHTML = '';

    Object.keys(counts).sort().forEach(tag => {
      const li = document.createElement('li');
      li.textContent = `<${tag}>: ${counts[tag]}`;
      resultList.appendChild(li);
    });
  }

  countBtn.addEventListener('click', countElements);
});