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
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(i, 1);
      saveTasks();
    };
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
