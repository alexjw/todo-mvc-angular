import { Component, Input } from '@angular/core';

@Component({
    selector:'Todo',
    template: `<li>{{text}}</li>`
})


export default class Todo {
    @Input() text : string;
    @Input() done : boolean = false;
}