const API_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

function loadTasks() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "getTasks" })
  })
  .then(res => res.json())
  .then(tasks => {
    const select = document.getElementById("taskSelect");
    tasks.forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.taskId;
      opt.text = `${t.description} (${t.points} pts)`;
      select.appendChild(opt);
    });
  });
}

function submitTask() {
  const payload = {
    employeeId: document.getElementById("empId").value,
    taskId: document.getElementById("taskSelect").value,
    dateCompleted: document.getElementById("date").value,
    context: document.getElementById("context").value,
    mediaLink: document.getElementById("mediaLink").value
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "submitTask",
      payload: payload
    })
  })
  .then(res => res.json())
  .then(resp => alert("Task submitted"));
}
