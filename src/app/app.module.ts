import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { state } from './shared';
import TodoList from "../TodoList/todo-list.components"
import Todo from "../TodoList/todo.component"


@NgModule({
    declarations: [
        AppComponent,
        TodoList,
        Todo
    ],
    imports: [
        BrowserModule
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