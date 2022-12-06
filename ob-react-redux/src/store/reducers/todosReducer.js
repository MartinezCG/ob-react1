// Initial TodosState

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

// Initialy todos is empty
let initialState=[]

export const todosReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return[
                ...state,
                {
                    id: action.paylode.id,
                    text: action.paylode.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.paylode.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            
            )
    
        default:
            return state;
    }
}