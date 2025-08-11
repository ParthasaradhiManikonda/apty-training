document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('myList').getElementsByTagName('li');
  const predefinedBtn = document.getElementById('predefinedUpdateBtn');
  const dynamicBtn = document.getElementById('dynamicUpdateBtn');
  const indexInput = document.getElementById('itemIndex');
  const newTextInput = document.getElementById('newText');

  predefinedBtn.addEventListener('click', () => {
    if (list.length >= 4) {
      list[1].textContent = 'Updated Item';
      list[3].textContent = 'Updated Item';
    }
  });
});
