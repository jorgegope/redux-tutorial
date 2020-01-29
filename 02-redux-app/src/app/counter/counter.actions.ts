import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const MULTIPLY = '[Counter] multiply';
export const DIVIDE = '[Counter] divide';
export const RESET = '[Counter] reset';

export class IncrementAction implements Action {
    readonly type = INCREMENT;
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;
}

export class MultiplyAction implements Action {
    readonly type = MULTIPLY;
    constructor(public payload: number) { }
}

export class DivideAction implements Action {
    readonly type = DIVIDE;
    constructor(public payload: number) { }
}
                                export class ResetAction implements Action {
                                    readonly type = RESET;
                                }

export type actions = IncrementAction | DecrementAction | MultiplyAction | DivideAction | ResetAction;
