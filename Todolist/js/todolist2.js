alert("Bonjour!");

console.log("J'affiche du texte");

function todoList() {
  var item = document.getElementById('todoInput').value;
  var text = document.createTextNode(item);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  var newItem = document.createElement("todoList");

  newItem.appendChild(checkbox);
  newItem.appendChild(text);
  document.getElementById("todoList").appendChild(newItem)


}
