// External
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'
import moment from 'moment'
import si from 'shortid'

// Internal
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import { Calendar, Priority } from '../../Icons/Icons'
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
            <div />
            <div onClick={stopPropagation} className="todo-preview-calendar">
                <Tooltip
                    // options
                    html={
                        <div className="todo-preview-set-due">
                            <p>Set a due date for this todo</p>
                            <DatetimePicker
                                moment={time}
                                onChange={handleTimeChange}
                            />
                        </div>
                    }
                    interactive
                    position="left"
                    trigger="click"
                >
                    <Calendar />
                </Tooltip>
            </div>
            <div onClick={stopPropagation}>
                <Tooltip
                    // options
                    html={
                        <div className="todo-preview-set-priority">
                            <p>Set a priority of this todo</p>
                            {[1, 2, 3].map(num => (
                                <Priority level={num} key={si.generate()} />
                            ))}
                        </div>
                    }
                    interactive
                    position="left"
                    trigger="click"
                >
                    <Priority level={priority} />
                </Tooltip>
            </div>
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
