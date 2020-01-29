import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../counter.actions';

@Component({
    selector: 'app-grandson',
    templateUrl: 'grandson.component.html'
})
export class GrandsonComponent implements OnInit {
    counter: number;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store
            .select('counter')
            .subscribe(counter => (this.counter = counter));
    }

    reset() {
        this.store.dispatch(new ResetAction());
    }
}
