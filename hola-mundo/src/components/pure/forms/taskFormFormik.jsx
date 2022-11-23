import React, { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";



const formSchema = Yup.object().shape(
    {
        nameRef: Yup.string()
            .required('Task Name is required')
            .min(3 , 'Task name too short'),
        descriptionRef: Yup.string()
            .required('Task Description is required')
            .min(10 , 'Description too short')
    }
)


const TaskFormFormik = ({ add, length }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const initialCredentials = {
        nameRef,
        descriptionRef,
        levelRef
    }

    function addTask(e){
        e.preventDefault()
        const newTask = new Task(
            initialCredentials.nameRef.current.value,
            initialCredentials.descriptionRef.current.value,
            false,
            initialCredentials.levelRef.current.value
        )
        add(newTask)
    }

    return (

        

        <div>
            <Formik
                // *** Initial values that the form will take ***
                initialValues= { initialCredentials }

                // *** Yup validation Schema ***
                validationSchema = { formSchema }

                // *** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                    
                    // We save the data in localStorage
                    
                }}

            >
            
            {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
            
                <Form onSubmit={addTask}>
                    <div>
                        <label htmlFor="nameRef">Task Name</label>
                        <Field id="nameRef" type="text" name="nameRef" placeholder="Task Name" className='form-control form-control-md'/>
                                
                        {/* Task name Errors */}
                        {
                            errors.nameRef && touched.nameRef &&
                            (
                                <ErrorMessage name='nameRef' component='div' />
                            )
                        }
                    </div>
                    <div>
                        <label htmlFor="descriptionRef">Description</label>
                            <Field id="descriptionRef" type="text" name="descriptionRef" placeholder="Description" className='form-control form-control-md'/>
                                    
                            {/* Description Errors */}
                            {
                                errors.descriptionRef && touched.descriptionRef &&
                                (
                                    <ErrorMessage name='descriptionRef' component='div' />
                                )
                            }
                    </div>
                    <div>
                    <label htmlFor="location">Task Priority</label>
                        <Field component="select" id="levelRef" name="levelRef" className='form-control form-control-md'>
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option> 
                        </Field>
                    </div>

                    <button type="submit" className='btn btn-success btn-lg ms-2'>
                        {length > 0 ? 'Add New Task' : 'Create First Task'}
                    </button>

                        {isSubmitting ? (<p>Updating tasks...</p>) : null}
                    
                </Form>
            )}
                

            </Formik>
            <h4></h4>
        </div>
    );
}

export default TaskFormFormik;
