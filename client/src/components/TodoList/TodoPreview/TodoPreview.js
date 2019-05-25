// External
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import si from 'shortid'

// Internal
import { updateTodo, deleteTodo } from '../../../util/api'
import { onError } from '../../ErrorHandler/ErrorHandler'
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
    setRootState,
    updateUtility,
    handleSlideLeft,
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

    const updateAndCatchError = async (id, sendObj) => {
        await updateTodo(id, sendObj, () =>
            onError('An error occurred in the server while updating', () =>
                updateAndCatchError(id)
            )
        )
        setRootState('updateUtility', updateUtility + 1)
    }

    const deleteAndCatchError = async id => {
        await deleteTodo(id, () =>
            onError('An error occurred in the server while deleting.', () =>
                deleteAndCatchError(id)
            )
        )
        setRootState('updateUtility', updateUtility + 1)
    }

    return (
        <Button handleClick={handleSlideLeft}>
            <Checkbox
                isChecked={isDone}
                handleClick={async () =>
                    updateAndCatchError(_id, {
                        isDone: !isDone,
                        title,
                        due,
                        priority,
                        content,
                    })
                }
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
                updateAndCatchError={async () =>
                    await updateAndCatchError(_id, {
                        due: tempState.due,
                        isDone,
                        title,
                        priority,
                        content,
                    })
                }
                className="leftmost-button"
            />
            <PriorityButton priority={priority} />
            <DeleteButton
                className="margin-right"
                handleClick={async () => await deleteAndCatchError(_id)}
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

export default TodoPreview
