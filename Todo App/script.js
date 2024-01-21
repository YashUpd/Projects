let addBtn = document.querySelector(".add-btn");
let inputElement = document.querySelector("#todo-input");
let containerElement = document.querySelector(".todo-container");
let dateElement = document.querySelector("#todo-date");

let todoList = [];

const addTodo = () => {
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = "";
  dateElement.value = "";
};

const displayItems = () => {
  let newHtml = ``;
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="delete-btn" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;

};

addBtn.addEventListener("click", () => {
    addTodo();
    displayItems();
});

