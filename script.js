document.addEventListener("DOMContentLoaded", function() {
  var taskInput = document.getElementById("taskInput");
  var addBtn = document.getElementById("addBtn");
  var taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", function() {
    var task = taskInput.value.trim();
    if (task !== "") {
      var listItem = document.createElement("li");
      var taskSpan = document.createElement("span");
      taskSpan.textContent = task;
      var doneBtn = document.createElement("button");
      doneBtn.textContent = "Done";
      doneBtn.addEventListener("click", function() {
        listItem.classList.toggle("done");
      });
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function() {
        listItem.remove();
      });
      listItem.appendChild(taskSpan);
      listItem.appendChild(doneBtn);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
});

