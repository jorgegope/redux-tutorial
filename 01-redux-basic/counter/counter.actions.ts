import { Action } from '../ngrx-fake/ngrx';

export const resetAction: Action = {
    type: 'reset'
};

export const increaseAction: Action = {
    type: 'increase'
};

export const decreaseAction: Action = {
    type: 'decrease'
};

export const multiplyAction: Action = {
    type: 'multiply',
    payload: 2
};

export const divideAction: Action = {
    type: 'divide',
    payload: 2
};
