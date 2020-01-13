import { Store, createStore } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { increaseAction } from './counter/counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increaseAction);
