import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { filterReducer } from './filterReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer,

        // ASYNC Example (Login User)
        userState: userReducer

        // ... add more states and reducer to include them in the store
    }
)