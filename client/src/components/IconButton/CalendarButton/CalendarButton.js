// External
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'
import moment from 'moment'

// Internal
import { Calendar as CalendarIcon } from '../Icons/Icons'
import './CalendarButton.scss'
import Button from '../../Button/Button'

const CalendarButton = ({
    time,
    handleTimeChange,
    handleClickOk,
    className = '',
    tooltipPosition = 'left',
    handleClickOk,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const [due, setDue] = useState(time)

    return (
        <div
            onClick={e => {
                e.stopPropagation()
                setIsOpen(() => true)
            }}
            className={`icon-button todo-calendar ${className}`}
        >
            <Tooltip
                html={
                    <div className="todo-set-due">
                        <p>Set a due date for this todo</p>
                        <DatetimePicker
                            moment={moment(due)}
                            onChange={moment => {
                                setDue(() => moment.valueOf())
                            }}
                        />
                        <Button
                            className="calendar-ok-button"
                            handleClick={async () => {
                                if (handleClickOk) await handleClickOk
                                setIsOpen(() => false)
                            }}
                        >
                            <p>OK</p>
                        </Button>
                    </div>
                }
                interactive
                position={tooltipPosition}
                trigger="click"
                isOpen={isOpen}
            >
                <CalendarIcon />
            </Tooltip>
        </div>
    )
}

export default CalendarButton
