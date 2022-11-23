import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import TaskFormFormik from '../pure/forms/taskFormFormik';

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example1','Description 1', true, LEVELS.NORMAL)

    const defaultTask2 = new Task('Example2','Description 2', false, LEVELS.URGENT)
    
    const defaultTask3 = new Task('Example3','Description 3', false, LEVELS.BLOCKING)


    // Estado del componente
    const [Tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [Loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('TaskList component is going to Unmount...')
        };
    }, [Tasks]);

    function completeTask(task){
        console.log('Complete this task:', task)
        const index = Tasks.indexOf(task)
        const tempTasks = [...Tasks]
        tempTasks[index].completed= !tempTasks[index].completed

        // We update the state of the component with the new list of tasks and it will update the
        // iteration of the tasks in order yo show the task updated
        setTasks(tempTasks)
    }

    function deleteTask(task){
        console.log('Delete this task:', task)
        const index = Tasks.indexOf(task)
        const tempTasks = [...Tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
    }

    function addTask(task){
        console.log('add this task:', task)
        const tempTasks = [...Tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    const Table = () =>{
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks.map((Task,index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={Task} 
                                    complete={completeTask} 
                                    remove = {deleteTask}>
                                </TaskComponent>
                             )
                        })
                    }
                                
                </tbody>
            </table>
        )
    }

    let tasksTable

    if(Tasks.length > 0){
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
        <div>
            <h3>There aren't tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: "bold"
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (Title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    {/* Card Body (Content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height: '400px' } }>
                        {/* TODO: Add Loading Spinner */}
                        {Loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                    </div>
                    
                </div>
            </div>
            {/* <TaskComponent task={defaultTask} ></TaskComponent> */}
            <TaskFormFormik add={addTask} length={Tasks.length}></TaskFormFormik>
        </div>
    );
};





export default TaskListComponent;
