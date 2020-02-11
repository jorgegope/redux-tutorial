import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styles: []
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;

    @ViewChild('textInputElement', {static: false}) textInputElement: ElementRef;

    editing: boolean;

    checkField: FormControl;
    textInput: FormControl;

    constructor() { }

    ngOnInit() {
        console.log(this.todo);
        this.checkField = new FormControl(this.todo.completed);
        this.textInput = new FormControl(this.todo.text, Validators.required);
    }

    edit() {
        this.editing = !this.editing;
        setTimeout(() => {
            this.textInputElement.nativeElement.select();
        }, 1);
    }

    endEditing() {
        this.editing = !this.editing;
    }

}
