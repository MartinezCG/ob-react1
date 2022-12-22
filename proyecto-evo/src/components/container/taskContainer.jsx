import React, { useContext, useReducer } from 'react';

const CREATE = "CREATE"
const DONECREATING = 'DONECREATING'
const FIELD = 'FIELD'
const DELETE = 'DELETE'
const DONEDELETING = 'DONEDELETING'
const FILTER = 'FILTER'
const ERROR = 'ERROR'

const myContext = React.createContext(null)

const initialState = {
    taskName: '',
    error: '',
    creatingTask: false,
    isFiltering: false,
    deletingTask: false
}

class Task {
    name = "";
    completed = false;

    constructor(name, completed){
        this.name=name;
        this.completed=completed;
    }
}

const tasks = []

const createTask = (name, completed) => {
    tasks.push(new Task(name, completed))
}



const taskReducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                creatingTask: true
            }
        case DONECREATING:
            return {
                ...state,
                creatingTask: false
            }
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case DELETE:
            return {
                ...state,
                deletingTask: true
            }
        case DONEDELETING:
            return {
                ...state,
                deletingTask: false
            }
        case FILTER:
            return {
                ...state,
                isFiltering: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Please, try again',
                taskName: '',
                creatingTask: false,
                isFiltering: false,
                deletingTask: false
            }   
        default:
            return state;
    }
}

const TaskContainer = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState)

    const { taskName } = state

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((Task,index) => {
                        return (
                                <tr key={index}>
                                    <td>
                                        {Task.name}
                                        
                                    </td>
                                    <td>
                                        {
                                            Task.completed ?
                                            'Completed'
                                            :
                                            'Incompleted'
                                        }
                                    </td>
                                </tr>
                             )
                        })
                    }
                                
                </tbody>
            </table>
            <form onSubmit={createTask}>
                <input type='text' value={ taskName } />
            </form>
            
        </div>
    );
}

export default TaskContainer;
