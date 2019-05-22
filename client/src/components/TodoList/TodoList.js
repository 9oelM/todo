// External
import React, { useCallback } from 'react'
import { PropTypes } from 'prop-types'
import { useMappedState } from 'redux-react-hook'
import si from 'shortid'

// Internal
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const TodoList = () => {
    const mapState = useCallback(state => state.todoReducer.todos, [])
    const todos = useMappedState(mapState)
    /*
    let TodoSchema = new Schema({
        title: String,
        content: String,
        priority: Number,
        completed: Boolean,
        due: Number,
        lastUpdated: Number,
    // due and lastUpdated represent the number of milliseconds since the Unix Epoch.
    })
    */
    return todos.map(({ id, title, priority, completed, due }) => (
        <TodoPreview
            key={si.generate()}
            id={id}
            title={title}
            priority={priority}
            due={due}
            completed={completed}
        />
    ))
}

TodoList.propTypes = {}

export default TodoList
