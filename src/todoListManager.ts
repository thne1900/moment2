import type { Todo } from './todo.ts';

export class TodoList {
  private todos:Todo[]=[];

constructor(){
  this.todos=[];
  this.loadFromLocalStorage();
}

//Lägger till nya todos
public addTodo(task:string, priority:number):boolean {

//Kontrollerar så att inte strängen är tom
if (typeof task!=="string"||task.trim()==="") {
  return false;
}
//Kontrollerar att prioriteringstalen är mellan 1 och 3.
if (!Number.isInteger(priority)||priority<1||priority>3) {
  return false;
}

//Skapa ny todo-uppgift:
const newTodo:Todo= {
  task:task.trim(),
  completed:false,
  priority:priority,
};

this.todos.push(newTodo);
this.saveToLocalStorage();
return true;
}

//Markera todos som klara med markering. 
public markTodoCompleted(todoIndex:number):void {
  if(Number.isInteger(todoIndex)&&todoIndex>=0 && todoIndex< this.todos.length) {
    this.todos[todoIndex].completed=true;
    this.saveToLocalStorage();
  }
}

//Hämtar att-göra listan:
public getTodos():Todo[] {
  return this.todos;
}

//Sparar till localStorage:
private saveToLocalStorage():void {
  try {
    const stringTodos=JSON.stringify(this.todos);
  localStorage.setItem("todos",stringTodos);
  }catch (error){
    console.error("Det gick inte att spara till LocalStorage", error);
  }
  }

  //Laddar från localStorage:
  private loadFromLocalStorage():void {
    const data=localStorage.getItem("todos");
    if(data) {
      try {
        const todosParsed=JSON.parse(data);
        if (Array.isArray(todosParsed)){
          this.todos=todosParsed.filter((todo) =>{
            return (typeof todo.task==="string" && typeof todo.completed==="boolean" && Number.isInteger(todo.priority)
            && todo.priority>=1 && todo.priority<=3
          );
          });
        }
      }catch(error){
        console.error("Fel vid inläsningen av todo-listan", error);
        this.todos=[];
      }
      }
    }
 
  //Metod för att ta bort alla tillagda todos.
  public deleteTodos():void{
    this.todos=[];
    this.saveToLocalStorage();
    }
  }

  

