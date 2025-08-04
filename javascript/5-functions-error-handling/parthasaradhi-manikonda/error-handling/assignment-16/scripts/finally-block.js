const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

const default_city = "Pune";

const users = {
  parthasaradhi: { address: { city: "Hyderabad" } },
  lakshman: { address: { city: "Bangalore" } },
  prem: { address: { city: "Hyderabad" } },
  sai: { address: { city: "Chennai" } },
  surya: { address: { city: "Kolkata" } },
  krishna: { address: { city: "Mumbai" } },
  saket: { address: { city: "Bangalore" } },
};

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = userNameInput.value.trim().toLowerCase();

  resultDiv.textContent = "";
  errorDiv.textContent = "";

  let found = false;

  try {
    const city = users[nameInput].address.city;
    resultDiv.textContent = `City: ${city}`;
    found = true;
  } catch (err) {
    errorDiv.textContent = `Error: User "${nameInput}" not found or missing address.`;
  } finally {
    if (!found) {
      const defaultCityDiv = document.createElement("div");
      defaultCityDiv.style.color = "green";
      defaultCityDiv.textContent = `Default City: ${default_city}`;
      resultDiv.appendChild(defaultCityDiv);
    }
  }
});
