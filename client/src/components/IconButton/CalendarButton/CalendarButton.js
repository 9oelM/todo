// External
import React from 'react'
import { PropTypes } from 'prop-types'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'

// Internal
import { Calendar as CalendarIcon } from '../Icons/Icons'
import './CalendarButton.scss'

const CalendarButton = ({ time, handleTimeChange, className = '' }) => (
    <div
        onClick={e => e.stopPropagation()}
        className={`icon-button todo-calendar ${className}`}
    >
        <Tooltip
            // options
            html={
                <div className="todo-set-due">
                    <p>Set a due date for this todo</p>
                    <DatetimePicker moment={time} onChange={handleTimeChange} />
                </div>
            }
            interactive
            position="left"
            trigger="click"
        >
            <CalendarIcon />
        </Tooltip>
    </div>
)

export default CalendarButton
