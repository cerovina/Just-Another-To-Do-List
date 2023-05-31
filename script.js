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
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Done";
      deleteBtn.addEventListener("click", function() {
        listItem.remove();
      });
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });
});
