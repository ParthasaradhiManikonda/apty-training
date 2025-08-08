
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUserBtn");
const introduceBtn = document.getElementById("introduceBtn");
const outputPara = document.getElementById("output");
const userList = document.getElementById("userList");

const users = [];

addUserBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value.trim());

    if (name === "" || isNaN(age) || age <= 0) {
        alert("Please enter a valid name and age.");
        return;
    }

    users.push({ name, age });

    const li = document.createElement("li");
    li.textContent = `${name} (${age})`;
    userList.appendChild(li);

    nameInput.value = "";
    ageInput.value = "";
});

introduceBtn.addEventListener("click", () => {
let result = "";

users.forEach((user) => {
    result += `${user.name} is ${user.age} years old.<br>`;
});

outputPara.innerHTML = result || "No users added yet.";
});
