// External
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import si from 'shortid'

// Internal
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import CalendarButton from '../../IconButton/CalendarButton/CalendarButton'
import DeleteButton from '../../IconButton/DeleteButton/DeleteButton'
import PriorityButton from '../../IconButton/PriorityButton/PriorityButton'

import './TodoPreview.scss'

const TodoPreview = ({ id, title, due, priority, isDone, handleClick }) => {
    const [time, setTime] = useState(moment(due, 'x'))

    const handleTimeChange = time => {
        setTime(time)
    }

    const stopPropagation = e => e.stopPropagation()

    return (
        <Button>
            <Checkbox isChecked={isDone} />
            {isDone ? (
                <div className="todo-preview-title">
                    <strike>{title}</strike>
                </div>
            ) : (
                <div className="todo-preview-title">{title}</div>
            )}
            <CalendarButton time={time} handleTimeChange={handleTimeChange} />
            <PriorityButton priority={priority} />
            <DeleteButton />
        </Button>
    )
}

TodoPreview.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    isDone: PropTypes.bool,
}

export default TodoPreview
