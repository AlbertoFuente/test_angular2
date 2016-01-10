//TypeScript
import {Component} from 'angular2/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todo/todo.component.html'
})
export class AppComponent {
    public todos = ["Eat Breakfast", "Walk Dog", "Breathe"];

    addTodo(todo: string) {
        if (this.checkTodo(todo) < 0 && typeof todo === 'string' && todo !== '') {
            this.todos[this.todos.length] = todo;
        }
    }

    checkTodo(todo) {
        return this.todos.findIndex(x => x.toLowerCase() === todo.toLowerCase());
    }

    doneTyping($event) {
      if($event.which === 13) {
        this.addTodo($event.target.value);
        $event.target.value = null;
      }
    }
}
