let taskContent = document.querySelector(".creatTask input[type='text']");
let add = document.querySelector(".creatTask input[type='submit']");
let tasks = document.querySelector('.tasks');

let tasksArray =
  window.localStorage.tasks === undefined || window.localStorage.tasks == ''
    ? []
    : window.localStorage.tasks.split(',');

window.onload = function () {
  if (
    window.localStorage.tasks !== undefined ||
    window.localStorage.tasks !== ''
  ) {
    for (let i = 0; i < tasksArray.length; i++) {
      create(tasksArray[i]);
    }
  }
};

add.onclick = function () {
  addTaskToLocal();
  create(taskContent.value);
};

function addTaskToLocal() {
  if (taskContent.value.trim() === '') return;
  tasksArray.push(taskContent.value);
  window.localStorage.tasks = tasksArray;
}

function create(content) {
  if (content == '') return;
  let task = document.createElement('div');
  task.className = 'task';
  task.textContent = content;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  task.appendChild(deleteButton);

  tasks.appendChild(task);

  taskContent.value = '';
  taskContent.focus();

  deleteButton.onclick = function () {
    task.remove();
    tasksArray = tasksArray.filter((t) => t !== content);
    window.localStorage.tasks = tasksArray;
  };
}
