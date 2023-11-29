const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    const listItem = document.createElement("li");
    // const listContent = document.createTextNode(inputBox.value);
    
    listItem.innerHTML = inputBox.value;
    listItem.className = "list-item";
    listContainer.appendChild(listItem);

    const span = document.createElement("span");
    span.innerHTML = "\u00D7";
    listItem.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
        if (confirm("Are you sure you want to delete this task?"))
      event.target.parentElement.remove();
      saveData();
    } else {
      return;
    }
  },
  false
);

function saveData() {
  localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadData() {
  if (localStorage.getItem("listContainer")) {
    listContainer.innerHTML = localStorage.getItem("listContainer");
  }
}

loadData();
