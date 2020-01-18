import { Output, Component, EventEmitter } from '@angular/core'

interface NewTodoEvent {
    text : string;
}

@Component ({
    selector: 'TodoInput',
    templateUrl: 'todo.input.html'
})

export default class {
    public input : string = "";
    @Output() newTodoEvent : EventEmitter<any> = new EventEmitter<any>();

    public go(){
        this.newTodoEvent.emit({text:this.input});
        this.input = "";
    }
};
