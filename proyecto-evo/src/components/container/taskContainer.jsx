import React, { useContext, useReducer } from 'react';

const CREATE = "CREATE"
const FIELD = 'FIELD'
const DELETE = 'DELETE'
const FILTER = 'FILTER'
const ERROR = 'ERROR'

const myContext = React.createContext(null)

const initialState = {
    taskName: '',
    completed: false,
    error: ''
}

const tasks = []

const createTask = (name, completed) => {
    tasks.push({
        name,
        completed,
    })
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                createTask(action.fieldName(), action.)
            }
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case DELETE:
            return {
                ...state
            }
        case FILTER:
            return {
                ...state
            }
        case ERROR:
            return {
                ...state
            }   
        default:
            return state;
    }
}

const TaskContainer = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState)

    return (
        <div>
            
        </div>
    );
}

export default TaskContainer;
