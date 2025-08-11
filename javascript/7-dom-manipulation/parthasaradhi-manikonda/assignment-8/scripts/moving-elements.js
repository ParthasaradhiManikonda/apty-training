document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#myTable tbody');

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');

    const cell1 = document.createElement('td');
    cell1.textContent = `Row ${i}`;

    const cell2 = document.createElement('td');
    cell2.innerHTML = `
      <button class="upBtn">Up</button>
      <button class="downBtn">Down</button>
      <button class="topBtn">Top</button>
      <button class="bottomBtn">Bottom</button>
    `;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }

  tbody.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'button') return;

    const button = e.target;
    const row = button.closest('tr');
    const parent = row.parentNode;

    if (button.classList.contains('upBtn')) {
      const prev = row.previousElementSibling;
      if (prev) {
        parent.insertBefore(row, prev);
      }
    }
    else if (button.classList.contains('downBtn')) {
      const next = row.nextElementSibling;
      if (next) {
        parent.insertBefore(next, row);
      }
    }
    else if (button.classList.contains('topBtn')) {
      parent.insertBefore(row, parent.firstElementChild);
    }
    else if (button.classList.contains('bottomBtn')) {
      parent.appendChild(row);
    }
  });
});
