let currentEditCardId = "";

function openEditModal(cardId) {
  currentEditCardId = cardId;
  const card = document.getElementById(cardId);
  const title = card.querySelector(".task-title").textContent;

  document.getElementById("edit-title").value = title;
  document.getElementById("edit-modal").style.display = "flex";
}

function closeEditModal() {
  document.getElementById("edit-modal").style.display = "none";
}

function saveEdit() {
  const newTitle = document.getElementById("edit-title").value;
  const newPriority = document.getElementById("edit-priority").value;

  const card = document.getElementById(currentEditCardId);

  card.querySelector(".task-title").textContent = newTitle;
  card.querySelector(".task-priority").textContent = newPriority;

  closeEditModal();
}
