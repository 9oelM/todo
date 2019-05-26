// External
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import moment from 'moment'

// Internal
import { createTodo, updateTodo, deleteTodo } from '../../util/api'
import { onError, onInfo } from '../ErrorHandler/ErrorHandler'
import ArrowBackButton from '../IconButton/ArrowBackButton/ArrowBackButton'
import CalendarButton from '../IconButton/CalendarButton/CalendarButton'
import DeleteButton from '../IconButton/DeleteButton/DeleteButton'
import PriorityButton from '../IconButton/PriorityButton/PriorityButton'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

import './TodoEditor.scss'

const TodoEditor = ({ rootState, setRootState, history, match }) => {
    const { todos } = rootState

    const initialTempState = {
        title: '',
        content: '',
        due: moment(), // NOTE: not set yet
        priority: 3,
        isDone: false,
    }

    const [tempState, setTempState] = useState(initialTempState)
    const { title, content, due, priority, isDone } = tempState

    const handleChange = (key, value) => {
        console.log(key, value)
        setTempState(state => ({
            ...state,
            [key]: value,
        }))
    }

    const handleAbort = () => {
        if (window.confirm('Are you sure you want to abort?')) {
            if (!match.params._id) {
                setTempState(() => initialTempState)
                history.push('/')
            } else {
                history.push('/')
            }
        }
    }

    return (
        <>
            <div id="todo-editor-options">
                <ArrowBackButton handleClick={handleAbort} />
                <Checkbox handleClick={() => handleChange('isDone', !isDone)} />
                <CalendarButton
                    time={due}
                    handleTimeChange={moment => handleChange('due', moment)}
                    tooltipPosition="bottom"
                    handleClick
                />
                <PriorityButton
                    priority={priority}
                    handleClick={level => handleChange('priority', level)}
                    tooltipPosition="bottom"
                />
                <DeleteButton
                    className="margin-right"
                    handleClick={handleAbort}
                />
            </div>
            <textarea
                className="textarea"
                id="textarea-title"
                placeholder="Title"
                value={title}
                onChange={e => handleChange('title', e.target.value)}
            />
            <textarea
                className="textarea"
                id="textarea-content"
                placeholder="Enter your content here"
                value={content}
                onChange={e => handleChange('content', e.target.value)}
            />
            <div id="todo-editor-save-container">
                <Button
                    handleClick={async () => {
                        if (title.length === 0 || content.length === 0) {
                            onInfo(
                                'You have not entered the title or the content. Please try again.'
                            )
                        } else {
                            const requestCreateTodoAndHandleError = async () => {
                                await createTodo(tempState, () =>
                                    onError(requestCreateTodoAndHandleError)
                                )
                            }
                            if (!match.params.id) {
                                // createTodo
                                await requestCreateTodoAndHandleError()
                                history.push('/')
                            } else {
                                // updateTodo
                            }
                        }
                    }}
                >
                    <span>Save</span>
                </Button>
            </div>
        </>
    )
}

TodoEditor.propTypes = {
    title: PropTypes.string,
    due: PropTypes.number,
    priority: PropTypes.number,
    isDone: PropTypes.bool,
}

export default withRouter(TodoEditor)
