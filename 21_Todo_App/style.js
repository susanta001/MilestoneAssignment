// Get the necessary elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add event listener to the add button
addButton.addEventListener('click', addTodo);

// Function to add a new todo
function addTodo() {
  // Get the todo value
  const todoText = todoInput.value;
  if(todoText === '')
  {
    alert("Add Task!")
  }
  else
  {
    // Create a new list item
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');

  // Create a span to hold the todo text
  const todoTextSpan = document.createElement('span');
  todoTextSpan.innerText = todoText;

  // Create a button for removing the todo
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', removeTodo);

  // Append the span and button to the list item
  listItem.appendChild(todoTextSpan);
  listItem.appendChild(removeButton);

  // Append the list item to the todo list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = '';
  }
  
}

// Function to remove a todo
function removeTodo() {
  // Get the parent list item and remove it
  const listItem = this.parentElement;
  todoList.removeChild(listItem);
}
