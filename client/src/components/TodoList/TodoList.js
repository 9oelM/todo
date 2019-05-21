// External
import React, { useCallback } from 'react'
import { PropTypes } from 'prop-types'
import { useMappedState } from 'redux-react-hook'

// Internal
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const TodoList = () => {
    const mapState = useCallback(state => state.todoReducer.todos, [])
    const todos = useMappedState(mapState)
    return todos.map(todo => <TodoPreview {...todo} />)
}

TodoList.propTypes = {
    test: PropTypes.array,
}

export default TodoList
