const form = document.getElementById('registrationForm');

const usernameInput = form.elements['username'];
const emailInput = form.elements['email'];
const passwordInput = form.elements['password'];
const confirmPasswordInput = form.elements['confirmPassword'];
const submitBtn = document.getElementById('submitBtn');

const errors = {
  username: document.getElementById('usernameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError'),
  confirmPassword: document.getElementById('confirmPasswordError')
};

function validateUsername() {
  const val = usernameInput.value.trim();
  if (val.length < 3) {
    errors.username.textContent = "Username must be at least 3 characters.";
    usernameInput.classList.add('invalid');
    return false;
  } else {
    errors.username.textContent = "";
    usernameInput.classList.remove('invalid');
    return true;
  }
}

function validateEmail() {
  const val = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (val === '') {
    errors.email.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(val)) {
    errors.email.textContent = "Enter a valid email address.";
    return false;
  } else {
    errors.email.textContent = "";
    return true;
  }
}

function validatePassword() {
  const val = passwordInput.value;
  if (val.length < 6) {
    errors.password.textContent = "Password must be at least 6 characters.";
    return false;
  } else {
    errors.password.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  const val = confirmPasswordInput.value;
  if (val !== passwordInput.value) {
    errors.confirmPassword.textContent = "Passwords do not match.";
    return false;
  } else {
    errors.confirmPassword.textContent = "";
    return true;
  }
}

function validateForm() {
  const validUsername = validateUsername();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validConfirm = validateConfirmPassword();

  const formIsValid = validUsername && validEmail && validPassword && validConfirm;
  submitBtn.disabled = !formIsValid;
  return formIsValid;
}

usernameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    alert("Registration successful!");
    // Form submits normally
  }
});
