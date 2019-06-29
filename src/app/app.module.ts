import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from './service/todo.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Todo, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
