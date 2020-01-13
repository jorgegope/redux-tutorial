import { Action } from "../ngrx-fake/ngrx";

export function counterReducer(state = 10, action: Action) {
    switch (action.type) {
        case 'increase':
            return (state += 1);
        case 'increase':
            return (state -= 1);
        case 'multiply':
            return (state *= action.payload);
        case 'divide':
            return (state /= action.payload);
        case 'reset':
            return 0;
        default:
            return state;
    }
}