import { TestBed } from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppComponent } from './app.component';
import { TodoListService } from './todo-list.service';

ngMocks.autoSpy('jasmine');

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => MockBuilder(AppComponent));

  beforeEach(() => {
    component = MockRender(AppComponent).componentInstance;
  });

  it('should call call todoListService.someMethod', () => {
    const todoListService = TestBed.inject(TodoListService);

    component.someMethod();
    expect(todoListService.someMethod).toHaveBeenCalled();
  });
});
