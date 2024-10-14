import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      userId: 0,
      completed: false,
      title: 'Task to do',
      id: 0
    },
    {
      userId: 0,
      completed: false,
      title: 'Another task to do',
      id: 1
    },
    {
      userId: 0,
      completed: false,
      title: 'Oops forgot about this',
      id: 2
    }
  ]
  constructor() { }
}
