document.addEventListener('DOMContentLoaded', () => {
  const countBtn = document.getElementById('countNestedBtn');
  const resultsList = document.getElementById('results');
  const parents = document.querySelectorAll('.parent');

  function countNestedElements() {
    resultsList.innerHTML = '';

    parents.forEach(parent => {
      const nestedCount = parent.querySelectorAll('*').length;

      const li = document.createElement('li');
      li.textContent = `Parent ID "${parent.id}" → ${nestedCount} nested elements`;
      resultsList.appendChild(li);
    });
  }

  countBtn.addEventListener('click', countNestedElements);
});
