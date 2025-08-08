function generateGreeting() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (!name || !age) {
    document.getElementById("output").textContent = "Please enter both name and age.";
    return;
    }

    const message = `Hello, my name is ${name} and I am ${age} years old.`;
    document.getElementById("output").textContent = message;
}
