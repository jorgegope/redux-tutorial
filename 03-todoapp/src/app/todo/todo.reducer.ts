import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';



const initialState: Todo[] = [new Todo('Win to Thanos'), new Todo('Save the world'), new Todo('Borrow the Ironman\'s suit')];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);
            return [...state, todo];

        default:
            return state;
    }
}
