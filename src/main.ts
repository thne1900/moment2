import './style.css'
import { TodoList } from './todoListManager.ts';

const myTodoList= new TodoList();
  console.log(myTodoList.getTodos());

// Hämta DOM-element
const form = document.getElementById("formTodo") as HTMLFormElement;
const inputTask = document.getElementById("task") as HTMLInputElement;
const inputPrio = document.getElementById("priority") as HTMLSelectElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

addTodo();

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
function addTodo():void {
  const task = inputTask.value.trim();
  const priority = parseInt(inputPrio.value, 10);
  const todoSuccess = myTodoList.addTodo(task, priority);
  if (todoSuccess) {
    inputTask.value = "";
    inputPrio.value = "";
    renderTodolist();
  } else {
    alert("Fel vid tillägg av uppgift. Kontrollera att inputfälten är korrekt ifyllda.");
  }
};




