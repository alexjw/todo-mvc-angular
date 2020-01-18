import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { state } from './shared';
import TodoList from "../TodoList/todo-list.components"
import Todo from "../TodoList/todo.component"
import TodoInput from "../TodoInput/todo-input-components"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import FilterToggle from "../FilterToggle/filter-toggle.component"


@NgModule({
    declarations: [
        AppComponent,
        TodoList,
        Todo,
        TodoInput,
        FilterToggle
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent],
    providers: [{
        provide: state,
        useValue: {
            showDone: true,
            todos: [{
                text:'The time for blathering has passed!',
                done: false
            },
                {
                text:'To the dungeon with him!',
                done: true
            }]
        }
    }]
})
export class AppModule {}