const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);

    const span = document.createElement("span");
    span.innerHTML = "\u00D7";
    listItem.appendChild(span);
  }
  inputBox.value = "";
}
