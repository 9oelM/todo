// External
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'

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
    triggerUpdateFromChild,
    history,
}) => {
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
                time={tempState.due}
                handleTimeChange={moment =>
                    handleChange('due', moment.valueOf())
                }
                handleClickOk={async dueInChild =>
                    await updateAndCatchError(
                        _id,
                        {
                            due: dueInChild, // NOTE: the state for due property is managed inside CalendarButton component.
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
                            priority,
                        },
                        triggerUpdateFromChild
                    )
                }}
            />
            <DeleteButton
                className="margin-right"
                handleClick={async () => {
                    await deleteAndCatchError(_id, triggerUpdateFromChild)
                }}
            />
        </Button>
    )
}

TodoPreview.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    due: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    priority: PropTypes.number,
    isDone: PropTypes.bool,
    content: PropTypes.string,
    triggerUpdateFromChild: PropTypes.func,
    history: PropTypes.object,
}

export default withRouter(TodoPreview)
