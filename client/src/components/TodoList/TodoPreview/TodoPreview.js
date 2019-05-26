// External
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import si from 'shortid'

// Internal
import { updateAndCatchError, deleteAndCatchError } from '../../../util/api'
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import CalendarButton from '../../IconButton/CalendarButton/CalendarButton'
import DeleteButton from '../../IconButton/DeleteButton/DeleteButton'
import PriorityButton from '../../IconButton/PriorityButton/PriorityButton'

import './TodoPreview.scss'

const TodoPreview = ({
    _id,
    title,
    due,
    priority,
    isDone,
    content,
    useForceUpdateInChild,
    triggerUpdateFromChild,
    history,
}) => {
    console.log(_id)
    const [tempState, setTempState] = useState({
        title,
        due,
        priority,
        isDone,
        content,
    })

    const handleChange = (key, value) => {
        setTempState(state => ({
            ...state,
            [key]: value,
        }))
    }

    return (
        <Button handleClick={() => history.push(`/editor/${_id}`)}>
            <Checkbox
                isChecked={isDone}
                handleClick={async () => {
                    updateAndCatchError(
                        _id,
                        {
                            isDone: !isDone,
                            title,
                            due,
                            priority,
                            content,
                        },
                        triggerUpdateFromChild
                    )
                }}
            />
            {isDone ? (
                <div className="todo-preview-title">
                    <strike>{title}</strike>
                </div>
            ) : (
                <div className="todo-preview-title">{title}</div>
            )}
            <CalendarButton
                time={moment(tempState.due)}
                handleTimeChange={moment =>
                    handleChange('due', moment.valueOf())
                }
                handleClickOk={async due =>
                    await updateAndCatchError(
                        _id,
                        {
                            due, // NOTE: the state for due property is managed inside CalendarButton component.
                            isDone,
                            title,
                            priority,
                            content,
                        },
                        triggerUpdateFromChild
                    )
                }
                className="leftmost-button"
            />
            <PriorityButton
                priority={tempState.priority}
                handleClick={async priority => {
                    handleChange('priority', priority)
                    await updateAndCatchError(
                        _id,
                        {
                            priority: priority,
                            due,
                            isDone,
                            title,
                            content,
                        },
                        triggerUpdateFromChild
                    )
                }}
            />
            <DeleteButton
                className="margin-right"
                handleClick={async () => {
                    await deleteAndCatchError(_id, triggerUpdateFromChild)
                    triggerUpdateFromChild()
                }}
            />
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

export default withRouter(TodoPreview)
