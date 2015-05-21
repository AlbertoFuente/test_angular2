//TypeScript
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})
@View({
  template: `
    <ul>
      <li *for="#todo of todos">
        {{ todo }}
      </li>
    </ul>

    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value)">Add Todo</button>
    `,
  directives: [For, If]
})
class TodoList {
  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}
bootstrap(TodoList);
