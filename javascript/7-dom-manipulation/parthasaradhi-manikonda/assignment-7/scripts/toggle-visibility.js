document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.toggle-div');
  const toggleBtn = document.getElementById('toggleBtn');

  let currentVisibleIndex = 0;

  divs.forEach((div, index) => {
    div.style.display = index === 0 ? 'block' : 'none';
  });

  toggleBtn.addEventListener('click', () => {
    divs[currentVisibleIndex].style.display = 'none';

    currentVisibleIndex = (currentVisibleIndex + 1) % divs.length;

    divs[currentVisibleIndex].style.display = 'block';
  });
});
 