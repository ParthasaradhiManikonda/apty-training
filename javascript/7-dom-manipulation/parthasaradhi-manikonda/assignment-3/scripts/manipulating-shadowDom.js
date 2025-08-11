document.addEventListener('DOMContentLoaded', () => {
  const host = document.getElementById('shadowHost');
  const shadowRoot = host.attachShadow({ mode: 'open' });

  const shadowHTML = `
    <style>
      .highlight { background-color: yellow; }
      table, td, th {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 8px;
      }
    </style>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Class Name</th>
          <th>Tag</th>
          <th>Name</th>
          <th>Attribute</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p id="p1">Paragraph 1</p>
            <p id="p2">Paragraph 2</p>
          </td>
          <td>
            <p class="sameClass">Class Item 1</p>
            <p class="sameClass">Class Item 2</p>
            <p class="sameClass">Class Item 3</p>
          </td>
          <td>
            <span>Span 1</span>
            <span>Span 2</span>
            <span>Span 3</span>
          </td>
          <td>
            <input type="text" name="input1" value="First" />
            <input type="text" name="input2" value="Second" />
          </td>
          <td>
            <p custom-attr="one">Custom Attr 1</p>
            <p custom-attr="two">Custom Attr 2</p>
          </td>
        </tr>
      </tbody>
    </table>
  `;

  shadowRoot.innerHTML = shadowHTML;

  function getRandomColor() {
    return '#' + Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 16).toString(16).toUpperCase()
    ).join('');
  }

  // a) Change color by ID
  function changeRandomColorById() {
    const ids = ['p1', 'p2'];
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const el = shadowRoot.getElementById(randomId);
    if (el) el.style.color = getRandomColor();
  }

  // b) Toggle background by class
  function toggleBackgroundByClass() {
    const elements = shadowRoot.querySelectorAll('.sameClass');
    elements.forEach(el => el.classList.toggle('highlight'));
  }

  // c) Change span text
  function changeSpanText() {
    const spans = shadowRoot.querySelectorAll('span');
    spans.forEach((span, i) => {
      span.innerHTML = `Updated Span ${i + 1}`;
    });
  }

  // d) Toggle disable by name
  function toggleDisableByName() {
    const inputs = shadowRoot.querySelectorAll('input[name]');
    inputs.forEach(input => {
      input.disabled = !input.disabled;
    });
  }

  // e) Add new custom attribute
  function addNewCustomAttribute() {
    const el = shadowRoot.querySelector('p[custom-attr="one"]');
    if (el && !el.hasAttribute('new-attr')) {
      el.setAttribute('new-attr', 'added');
      el.textContent += ' (new-attr added)';
    }
  }

  document.getElementById('changeColorBtn').addEventListener('click', changeRandomColorById);
  document.getElementById('toggleBgBtn').addEventListener('click', toggleBackgroundByClass);
  document.getElementById('changeSpanBtn').addEventListener('click', changeSpanText);
  document.getElementById('toggleDisableBtn').addEventListener('click', toggleDisableByName);
  document.getElementById('addAttrBtn').addEventListener('click', addNewCustomAttribute);
});
