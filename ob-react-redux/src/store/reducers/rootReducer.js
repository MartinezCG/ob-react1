import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer

        // ... add more states and reducer to include them in the store
    }
)