function createEmployee() {
  const name = document.getElementById("nameInput").value.trim();
  const job = document.getElementById("jobInput").value.trim();
  const output = document.getElementById("output");

  if (!name || !job) {
    output.textContent = "Please enter both name and job.";
    return;
  }

  let person = {name};

  let employee = Object.create(person);
  employee.job = job;

  employee.greet = function () {
    return `Hello, ${this.name} the ${this.job}!`;
  };

  output.textContent =
    "Output of employee.greet():\n" + employee.greet();
}
