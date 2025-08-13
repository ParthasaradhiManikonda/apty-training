const keydownDiv = document.getElementById('keydownDiv');
const keyupDiv = document.getElementById('keyupDiv');

function getKeyDescription(event) {
  let keys = [];
  if (event.ctrlKey) keys.push('Ctrl');
  if (event.shiftKey) keys.push('Shift');
  if (event.altKey) keys.push('Alt');
  if (event.metaKey) keys.push('Meta');

  const key = event.key;

  if (
    key !== 'Control' &&
    key !== 'Shift' &&
    key !== 'Alt' &&
    key !== 'Meta'
  ) {
    keys.push(key);
  }

  return keys.join(' + ');
}

document.addEventListener('keydown', (event) => {
  const desc = getKeyDescription(event);
  const div = document.createElement('div');
  div.textContent = desc;
  keydownDiv.appendChild(div);
});

document.addEventListener('keyup', (event) => {
  const desc = getKeyDescription(event);
  const div = document.createElement('div');
  div.textContent = desc;
  keyupDiv.appendChild(div);
});
