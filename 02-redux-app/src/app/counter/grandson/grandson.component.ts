import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grandson',
    templateUrl: 'grandson.component.html'
})
export class GrandsonComponent implements OnInit {
    @Input() counter: number;

    @Output() counterChanged: EventEmitter<number>;

    constructor() {
        this.counterChanged = new EventEmitter<number>();
    }

    ngOnInit() {}

    reset() {
        this.counter = 0;
        this.counterChanged.emit(this.counter);
    }
}
