import './style.css'
import { TodoListManager } from './todoListManager';

const myTodoList= new TodoListManager();
  console.log(myTodoList.getTodos());

// Hämta DOM-elementet (form)
document.addEventListener("DOMContentLoaded", ()=> {
const form = document.getElementById("formTodo")! as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();

createTodo();

  });
});

//Funktion för att hantera listan
function renderTodolist():void {
const todoList = document.getElementById("todoList") as HTMLUListElement;
 todoList.innerHTML = "";

 myTodoList.getTodos().forEach((todo, index) => {
    const liEl:HTMLLIElement = document.createElement("li");
    const checkTodo:HTMLInputElement=document.createElement("input");
    checkTodo.type="checkbox";
    checkTodo.checked=todo.completed;
    checkTodo.addEventListener("change",()=>{

      myTodoList.markTodoCompleted(index);
      renderTodolist();
    });
    liEl.innerHTML = `${todo.task} <i>(Prio: ${todo.priority})</i>`;
    if (todo.completed) {
      liEl.classList.add("done");
    }else {
      liEl.classList.remove("done");
    }
    liEl.appendChild(checkTodo);
    todoList.appendChild(liEl);
  });
}

// Funktion för att lägga till todos
function createTodo():void {
  const inputTask = document.getElementById("task") as HTMLInputElement;
  const inputPrio = document.getElementById("priority") as HTMLSelectElement;
  const task = inputTask.value.trim();
  const priority = parseInt(inputPrio.value, 10);
  const todoSuccess:boolean = myTodoList.addTodo(task, priority);
  if (todoSuccess) {
    inputTask.value = "";
    inputPrio.value = "";
    renderTodolist();
  } else {
    alert("Fel vid tillägg av uppgift. Kontrollera att inputfälten är korrekt ifyllda.");
  }
};

//Händelsehanterare för att radera alla todos
const markAllButton=document.getElementById("deleteTodos") as HTMLButtonElement;
markAllButton.addEventListener("click", ()=> {
  myTodoList.deleteTodos();
  renderTodolist();
});
renderTodolist();


