import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//Interface
export class Todo {
	completed: Boolean;
	editing: Boolean;

	private _title: String;
	get title() {
		return this._title;
	}
	set title(value: String) {
		this._title = value.trim();
	}

	constructor(title: String) {
		this.completed = false;
		this.editing = false;
		this.title = title.trim();
	}
}
//Service Class
export class TodoService {
  todos: Array<Todo>;

	constructor() {
		let persistedTodos = JSON.parse(localStorage.getItem('todo-app') || '[]');
		this.todos = persistedTodos.map( (todo: {_title: String, completed: Boolean}) => {
			let ret = new Todo(todo._title);
			return ret;
		});
  }
  
  add(title: String) {
    
		this.todos.push(new Todo(title));
		this.updateStore();
  }
  
  private updateStore() {
		localStorage.setItem('todo-app', JSON.stringify(this.todos));
  }

  getRemaining() {
		return this.getWithCompleted(false);
  }
  
  remove(todo: Todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		this.updateStore();
  }
  
  private getWithCompleted(completed: Boolean) {
		return this.todos.filter((todo: Todo) => todo.completed === completed);
	}
	
}
