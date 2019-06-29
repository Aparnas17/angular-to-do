import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newTodoText = '';

  constructor(public todoStore: TodoService) {
    this.todoStore = todoStore;
    console.log(this.todoStore);
}

  ngOnInit() {
  }

  addTodo(todoStatus) {
    if (this.newTodoText.trim().length) {
      
        this.todoStore.add(this.newTodoText);
        
        this.newTodoText = '';
    }
}
  remove(todo: Todo, todoStatus){
    this.todoStore.remove(todo);
  }
}
