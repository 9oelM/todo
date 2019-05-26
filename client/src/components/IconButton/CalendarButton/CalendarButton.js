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
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [due, setDue] = useState(time)
    let isDueNotSetYet = due === ''
    if (isDueNotSetYet) {
        setDue(() => moment().valueOf())
    }
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
                        <p>Set a date for this todo</p>
                        <DatetimePicker
                            moment={moment(due, 'x')}
                            onChange={moment => {
                                setDue(() => moment.valueOf())
                            }}
                        />
                        <Button
                            className="calendar-ok-button"
                            handleClick={e => {
                                e.stopPropagation()
                                if (handleClickOk) handleClickOk(due)
                                setIsOpen(() => false)
                            }}
                        >
                            <p>Set due</p>
                        </Button>
                    </div>
                }
                isOpen={isOpen}
                interactive
                position={tooltipPosition}
                trigger="click"
            >
                <CalendarIcon />
            </Tooltip>
        </div>
    )
}

CalendarButton.propTypes = {
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleTimeChange: PropTypes.func,
    handleClickOk: PropTypes.func,
    className: PropTypes.string,
    tooltipPosition: PropTypes.string,
}

export default CalendarButton
