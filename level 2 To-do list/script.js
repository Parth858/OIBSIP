// Selecting elements
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const errorMsg = document.getElementById('errorMsg');

// Creating an array to store the to-do items
let toDoList = [];

// Function to add a new to-do item to the list
function addToDo() {
  // Get the value of the input
  const newItem = input.value;

  // Check if the input is empty
  if (newItem === '') {
    errorMsg.textContent = 'Please enter a task!';
    return;
  }

  // Add the new item to the array
  toDoList.push(newItem);

  // Clear the input field and error message
  input.value = '';
  errorMsg.textContent = '';

  // Display the updated to-do list
  displayList();
}

// Function to display the to-do list
function displayList() {
  // Clear the current list items
  list.innerHTML = '';

  // Loop through the to-do list array and create a new list item for each item
  for (let i = 0; i < toDoList.length; i++) {
    const item = document.createElement('li');
    item.textContent = toDoList[i];

    // Add a "done" class to the list item when clicked
    item.addEventListener('click', function () {
      item.classList.toggle('done');
    });

    // Append the list item to the unordered list
    list.appendChild(item);
  }
}

// Event listener for the add button
addBtn.addEventListener('click', addToDo);

// Event listener for the enter key
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addToDo();
  }
});
