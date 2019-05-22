// External
import React, { useCallback } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { PropTypes } from 'prop-types'
import Checkbox from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'

// Internal
import Button from '../../Button/Button'
import './TodoPreview.scss'

const handleCheckboxToggle = () => {
    // 1. UPDATE difference
    // 2. Strikethrough
}

const TodoPreview = ({ id, title, due, priority, completed }) => {
    // TODO: think again on how the whole todopreview and todolist would interact to receive props and update component
    console.log(id)
    const mapState = useCallback(
        state => state.todoReducer.todos.find(elem => elem.id == id),
        [id]
    )
    const todo = useMappedState(mapState)
    console.log(todo)
    const dispatch = useDispatch()
    const changeTodo = useCallback(
        () =>
            dispatch({
                type: 'CHANGE_TODO',
                data: {
                    id,
                    completed: !todo.completed,
                },
            }),
        [id]
    )

    return (
        <Button>
            {completed ? (
                <Checkbox checked onChange={changeTodo} />
            ) : (
                <Checkbox onChange={changeTodo} />
            )}
            {completed ? (
                <strike>
                    <div>{title}</div>
                </strike>
            ) : (
                <div>{title}</div>
            )}
            <div>{due}</div>
            <div>{priority}</div>
            <div>{completed}</div>
        </Button>
    )
}

TodoPreview.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    completed: PropTypes.bool,
}

export default TodoPreview
