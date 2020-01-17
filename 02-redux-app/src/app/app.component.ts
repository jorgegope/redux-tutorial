import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementAction, DecrementAction } from './counter/counter.actions';

interface AppState {
    counter: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'redux-app';

    protected counter: number;

    constructor(private store: Store<AppState>) {
        this.counter = 10;
        this.store.subscribe((state: AppState) => {
            this.counter = state.counter;
        });
    }

    increase() {
        const action: Action = new IncrementAction();
        this.store.dispatch(action);
    }

    decrease() {
        const action: Action = new DecrementAction();
        this.store.dispatch(action);
    }

    onCounterChanged(counter: number) {
        this.counter = counter;
    }
}
