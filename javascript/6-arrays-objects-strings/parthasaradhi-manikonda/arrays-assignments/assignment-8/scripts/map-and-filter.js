const taskInput = document.getElementById("task");
const completedInput = document.getElementById("completed");
const addTaskBtn = document.getElementById("addTaskBtn");
const showCompletedBtn = document.getElementById("showCompletedBtn");
const taskList = document.getElementById("taskList");
const output = document.getElementById("output");

const tasks = [];

addTaskBtn.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    const isCompleted = completedInput.checked;

    if (taskName === "") {
    alert("Please enter a task name.");
    return;
    }

    tasks.push({ task: taskName, completed: isCompleted });

    const li = document.createElement("li");
    li.textContent = `${taskName} - ${
    isCompleted ? "Completed" : "Incomplete"
    }`;
    taskList.appendChild(li);

    taskInput.value = "";
    completedInput.checked = false;
});

showCompletedBtn.addEventListener("click", () => {
    const completedTasks = tasks
    .filter((t) => t.completed)
    .map((t) => `'${t.task}'`);

    output.textContent = `[${completedTasks.join(", ")}]`;
});