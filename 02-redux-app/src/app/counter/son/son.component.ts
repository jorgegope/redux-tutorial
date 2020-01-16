import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-son',
    templateUrl: 'son.component.html'
})
export class SonComponent implements OnInit {
    @Input() counter: number;

    @Output() counterChanged: EventEmitter<number>;

    constructor() {
        this.counterChanged = new EventEmitter<number>();
    }

    ngOnInit() {}

    multiply() {
        this.counter *= 2;
        this.counterChanged.emit(this.counter);
    }

    divide() {
        this.counter /= 2;
        this.counterChanged.emit(this.counter);
    }

    onCounterChanged(counter: number) {
        this.counter = counter;
        this.counterChanged.emit(this.counter);
    }
}
