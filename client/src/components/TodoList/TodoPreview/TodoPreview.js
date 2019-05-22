// External
import React from 'react'
import { PropTypes } from 'prop-types'

// Internal
import Button from '../../Button/Button'
import './TodoPreview.scss'

const TodoPreview = ({ title, due, priority, completed }) => (
    <Button>
        <div>{title}</div>
        <div>{due}</div>
        <div>{priority}</div>
        <div>{completed}</div>
    </Button>
)

TodoPreview.propTypes = {
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    completed: PropTypes.bool,
}

export default TodoPreview
