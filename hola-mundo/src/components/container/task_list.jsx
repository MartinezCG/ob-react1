import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TO DO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your tasks:
            </div>

            {/* TO DO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask} ></TaskComponent>

        </div>
    );
};





export default TaskListComponent;
