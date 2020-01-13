import { Reducer, Action } from './ngrx-fake/ngrx';
import { counterReducer } from './counter/counter.reducer';
import { increaseAction } from './counter/counter.actions';

class Store<T> {
    constructor(private reducer: Reducer<T>, private state: T) {}

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(counterReducer, 10);
store.dispatch(increaseAction);
console.log(store.getState());
