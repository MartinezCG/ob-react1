import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import TodoForm from '../pure/todoForm'



const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }   
    }
}

const todoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default todoFormContainer