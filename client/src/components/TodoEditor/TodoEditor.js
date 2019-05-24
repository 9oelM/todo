// External
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import moment from 'moment'

// Internal
import ArrowBackButton from '../IconButton/ArrowBackButton/ArrowBackButton'
import CalendarButton from '../IconButton/CalendarButton/CalendarButton'
import DeleteButton from '../IconButton/DeleteButton/DeleteButton'
import PriorityButton from '../IconButton/PriorityButton/PriorityButton'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

import './TodoEditor.scss'

const TodoEditor = ({
    id,
    due = new Date().getTime(),
    priority = 1,
    handleSlideRight,
}) => {
    // get state by using the id
    const [time, setTime] = useState(moment(due, 'x'))

    const handleTimeChange = time => {
        setTime(time)
    }

    return (
        <>
            <div>
                <ArrowBackButton handleClick={handleSlideRight} />
                <Checkbox />
                <CalendarButton
                    time={time}
                    handleTimeChange={handleTimeChange}
                />
                <DeleteButton />
                <PriorityButton priority={priority} />
            </div>
            <textarea>test</textarea>
            <textarea>asfsadfasdf</textarea>
            <div>
                <Button>Save</Button>
            </div>
        </>
    )
}

TodoEditor.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    completed: PropTypes.bool,
}

export default TodoEditor
