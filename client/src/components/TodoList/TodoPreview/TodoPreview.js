// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import './TodoPreview.scss'

const TodoPreview = ({ title, content, due, priority, done }) => (
    <>
        <div>{title}</div>
        <div>{content}</div>
        <div>{due.toString()}</div>
        <div>{priority}</div>
        <div>{done}</div>
    </>
)

TodoPreview.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    due: PropTypes.string,
    priority: PropTypes.string,
    done: PropTypes.string,
}

export default TodoPreview
