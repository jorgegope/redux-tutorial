import { Action } from '@ngrx/store';
import { DECREMENT, INCREMENT } from './counter.actions';

export function counterReducer(state: number = 10, action: Action) {
    console.log('TCL: counterReducer -> action', action);
    switch (action.type) {
        case INCREMENT:
            return state - 1;

        case DECREMENT:
            return state + 1;

        default:
            return state;
    }
}
