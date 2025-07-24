    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let ageInput = document.getElementById("age");
    let checkEligibilityBtn = document.getElementById("check-eligibility");
    let result = document.getElementById("result");

    checkEligibilityBtn.addEventListener("click", function () {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const age = parseInt(ageInput.value);

        const textContent1 = `Hello ${firstName} ${lastName}, welcome to Apty!`;
        const textContent2 = `Hello ${firstName} ${lastName}, come back after ${18 - age} years.`;

        result.textContent = isNaN(age) ? "" : (age >= 18 ? textContent1 : textContent2);
    });