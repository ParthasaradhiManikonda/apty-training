document.addEventListener('DOMContentLoaded', () => {
  const shadowHost = document.getElementById('shadowHost');
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

  const tableHTML = `
    <style>
      table { border-collapse: collapse; width: 100%; }
      td, th { border: 1px solid #888; padding: 8px; text-align: center; }
    </style>
    <table id="myTable">
      <thead>
        <tr>
          <th>Row</th>
        </tr>
      </thead>
      <tbody>
        ${Array.from({ length: 10 }, (_, i) => `
          <tr><td>Row ${i + 1}</td></tr>
        `).join('')}
      </tbody>
    </table>
  `;

  shadowRoot.innerHTML = tableHTML;

  const rowSelector = document.getElementById('rowSelector');

  function refreshRowSelector() {
    rowSelector.innerHTML = '';
    const rows = shadowRoot.querySelectorAll('#myTable tbody tr');
    rows.forEach((row, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = row.textContent;
      rowSelector.appendChild(option);
    });
  }
  refreshRowSelector();

  function moveRow(action) {
    const tbody = shadowRoot.querySelector('#myTable tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    let index = parseInt(rowSelector.value, 10);
    const row = rows[index];

    if (!row) return;

    if (action === 'up' && index > 0) {
      tbody.insertBefore(row, rows[index - 1]);
      index--;
    }
    else if (action === 'down' && index < rows.length - 1) {
      tbody.insertBefore(rows[index + 1], row);
      index++;
    }
    else if (action === 'top') {
      tbody.insertBefore(row, tbody.firstElementChild);
      index = 0;
    }
    else if (action === 'bottom') {
      tbody.appendChild(row);
      index = tbody.children.length - 1;
    }

    refreshRowSelector();
    rowSelector.value = index;
  }

  document.getElementById('upBtn').addEventListener('click', () => moveRow('up'));
  document.getElementById('downBtn').addEventListener('click', () => moveRow('down'));
  document.getElementById('topBtn').addEventListener('click', () => moveRow('top'));
  document.getElementById('bottomBtn').addEventListener('click', () => moveRow('bottom'));
});
