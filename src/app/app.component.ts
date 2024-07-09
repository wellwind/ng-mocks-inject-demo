import { Component, inject } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ``,
})
export class AppComponent {
  // can not be auto spied
  public todoListService = inject(TodoListService);

  // can be auto spied
  // constructor(private todoListService: TodoListService) {}

  someMethod() {
    this.todoListService.someMethod();
  }
}
