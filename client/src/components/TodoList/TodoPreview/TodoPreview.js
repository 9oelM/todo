// External
import React, {useState} from 'react'
import { PropTypes } from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { DatetimePicker } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'
import moment from 'moment'

// Internal
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import { Calendar, Priority } from '../../Icons/Icons'

import './TodoPreview.scss'

const TodoPreview = ({ id, title, due, priority, isDone, handleClick }) => {
    
    const [time, setTime] = useState(moment(due, 'x'))
    const handleTimeChange = time => {
        setTime({
          time
        });
    }
    
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
            <a data-tip data-for="calendar" class="todo-preview-icon">
                <div>
                    <Calendar />
                </div>
            </a>
            <ReactTooltip id="calendar" data-iscapture="true" event="click" place = "left">
                <DatetimePicker moment={time} onChange={handleTimeChange} />
            </ReactTooltip>
            <div>
                <Priority level={priority} />
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
