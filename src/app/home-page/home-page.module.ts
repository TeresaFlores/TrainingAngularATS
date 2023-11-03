import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestThingComponent } from './test-thing/test-thing.component';
import { FunThingComponent } from './fun-thing/fun-thing.component';
import { PersonsTableComponent } from './persons-table/persons-table.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TestThingComponent,
    FunThingComponent,
    PersonsTableComponent,
  ],
  imports: [CommonModule],
  exports: [
    TodoListComponent,
    TestThingComponent,
    FunThingComponent,
    PersonsTableComponent,
  ],
})
export class HomePageModule {}
