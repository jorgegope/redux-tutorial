import { increaseAction, decreaseAction, multiplyAction, divideAction, resetAction } from './counter/counter.actions';
import { counterReducer } from './counter/counter.reducer';

console.log(counterReducer(10, increaseAction));
console.log(counterReducer(10, decreaseAction));
console.log(counterReducer(10, multiplyAction));
console.log(counterReducer(10, divideAction));
console.log(counterReducer(10, resetAction));
