document.getElementById("addTask").addEventListener("click", function() {
  let task = document.getElementById("taskInput").value;
  if(task === "") return;
  
  let li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", function() {
    li.remove();
  });
  
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
});