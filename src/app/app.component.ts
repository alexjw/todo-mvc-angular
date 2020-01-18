import { Component, Inject } from '@angular/core';
import  { state } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html',
})
export class AppComponent {
    private todos :any[];
    private showDone : boolean = true;

    constructor(@Inject(state) state) {
        console.info("Constructor: ", state);
        this.todos = state.todos;
        this.showDone = state.showDone;
    }
}