function updateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    // Task text
    const span = document.createElement("span");
    span.textContent = task;
    span.style.cursor = "pointer";

    // Edit on click
    span.onclick = () => {
      const updated = prompt("Edit task:", task);
      if (updated !== null && updated.trim() !== "") {
        tasks[i] = updated.trim();
        saveTasks();
      }
    };

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.cursor = "pointer";

    delBtn.onclick = () => {
      tasks.splice(i, 1);
      saveTasks();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    saveTasks();
  }
});

renderTasks();

const quotes = [
  "Small steps every day.",
  "Focus beats motivation.",
  "Build calm. Build consistency."
];

document.getElementById("quote").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];
