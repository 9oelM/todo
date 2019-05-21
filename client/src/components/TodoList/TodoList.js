// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import TodoPreview from '../TodoPreview/TodoPreview'
import './TodoList.sass'

const TodoList = ({ todos }) => todos.map(todo => <TodoPreview {...todo} />)

TodoList.propTypes = {
    test: PropTypes.array,
}

export default TodoList
