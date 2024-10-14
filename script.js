let currentColumnId = "";

function addTask(columnId) {
  // Store the current column ID
  currentColumnId = columnId;
  // Show the modal
  document.getElementById("task-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("task-modal").style.display = "none";
}

function submitTask() {
  // Get task details
  const title = document.getElementById("task-title").value;
  const priority = document.getElementById("task-priority").value;

  if (title === "") {
    alert("Please enter a task title.");
    return;
  }

  // Create a new card element
  const card = document.createElement("div");
  card.className = `card ${priority}`;

  // Add title and priority elements
  const taskTitle = document.createElement("div");
  taskTitle.className = "task-title";
  taskTitle.textContent = title;

  const taskPriority = document.createElement("div");
  taskPriority.className = "task-priority";
  taskPriority.textContent = `Priority: ${priority}`;

  // Append title and priority to card, and card to the column
  card.appendChild(taskTitle);
  card.appendChild(taskPriority);
  document.getElementById(currentColumnId).appendChild(card);

  // Reset form and close modal
  document.getElementById("task-title").value = "";
  document.getElementById("task-priority").value = "low";
  closeModal();
}
