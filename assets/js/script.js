const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listItem.className = "list-item";
    listContainer.appendChild(listItem);

    const span = document.createElement("span");
    span.innerHTML = "\u00D7";
    listItem.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
        if (confirm("Are you sure you want to delete this task?"))
      event.target.parentElement.remove();
    } else {
      return;
    }
  },
  false
);
