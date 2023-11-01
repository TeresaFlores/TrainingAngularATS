import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: string[];
  constructor() {}

  ngOnInit(): void {
    this.todos = ['Learn Angular', 'Be good at it', 'profit'];
  }
}
