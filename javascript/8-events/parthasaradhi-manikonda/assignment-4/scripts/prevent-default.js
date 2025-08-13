const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];

  const nameValid = nameInput.value.trim() !== '';
  const emailValid = emailInput.value.trim() !== '' && emailInput.validity.valid;

  if (!nameValid || !emailValid) {
    event.preventDefault();

    alert('Please fill out the form correctly before submitting.');
  }
  // else: form submits normally
});
