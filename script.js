let currentCardId = null;
let currentColumnId = "";

function addTask(columnId) {
  currentColumnId = columnId;
  currentCardId = null; // Set to null to indicate adding a new task
  document.getElementById("modal-title").textContent = "Add Task";
  document.getElementById("modal-action").textContent = "Add Task";
  
  // Clear any existing values in the input fields
  document.getElementById("task-title").value = "";
  document.getElementById("task-priority").value = "low";
  
  // Open the modal for adding
  document.getElementById("task-modal").style.display = "flex";
}

function openEditModal(cardId) {
  currentCardId = cardId; // Store the ID of the card being edited
  currentColumnId = null; // No column ID needed for editing
  
  const card = document.getElementById(cardId);
  const title = card.querySelector(".task-title").textContent;
  const priority = card.querySelector(".task-priority").textContent.toLowerCase();

  // Pre-fill modal with existing task details
  document.getElementById("task-title").value = title;
  document.getElementById("task-priority").value = priority;
  
  // Change modal title and button text for editing
  document.getElementById("modal-title").textContent = "Edit Task";
  document.getElementById("modal-action").textContent = "Save Changes";
  
  // Open the modal for editing
  document.getElementById("task-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("task-modal").style.display = "none";
}

function handleTaskAction() {
  const title = document.getElementById("task-title").value;
  const priority = document.getElementById("task-priority").value;

  if (title === "") {
    alert("Please enter a task title.");
    return;
  }

  if (currentCardId) {
    // Edit existing task
    const card = document.getElementById(currentCardId);
    card.querySelector(".task-title").textContent = title;
    card.querySelector(".task-priority").textContent = `Priority: ${priority}`;
    card.className = `card ${priority}`;
  } else {
    // Add new task
    const card = document.createElement("div");
    card.className = `card ${priority}`;
    
    const taskTitle = document.createElement("div");
    taskTitle.className = "task-title";
    taskTitle.textContent = title;
    
    const taskPriority = document.createElement("div");
    taskPriority.className = "task-priority";
    taskPriority.textContent = `Priority: ${priority}`;
    
    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";
    editButton.onclick = () => openEditModal(card.id);

    card.appendChild(taskTitle);
    card.appendChild(taskPriority);
    card.appendChild(editButton);

    document.getElementById(currentColumnId).appendChild(card);
  }

  // Close modal after action
  closeModal();
}
