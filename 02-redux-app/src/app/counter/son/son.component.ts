import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
    selector: 'app-son',
    templateUrl: 'son.component.html'
})
export class SonComponent implements OnInit {
    counter: number;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store
            .select('counter')
            .subscribe(counter => (this.counter = counter));
    }

    multiply() {
        this.store.dispatch(new MultiplyAction(5));
    }

    divide() {
        this.store.dispatch(new DivideAction(5));
    }

    onCounterChanged(counter: number) {
        this.counter = counter;
        // this.counterChanged.emit(this.counter);
    }
}
