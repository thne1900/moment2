import type { Todo } from './Itodo.ts';

//Klass från interfacet- todo.ts
export class Todolist implements Todo {
task:string;
completed:boolean;
priority:number;

  constructor(task:string, completed:boolean, priority:number){
  this.task=task;
  this.completed=completed;
  this.priority=priority;
}
}

