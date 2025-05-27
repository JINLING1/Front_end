const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
   <div class="todo-message"> ${name}</div>
   <div class="todo-message"> ${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    </div>`;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  //querySelectorAll获取所有的删除按钮，通过forEach循环遍历每个按钮添加监听器
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        deleteTodo(index);
      });
    });
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  //get the value of the input
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    /*name: name,
    dueDateLdueDate,*/
    name,
    dueDate,
  });
  inputElement.value = "";
  //display
  renderTodoList();
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
