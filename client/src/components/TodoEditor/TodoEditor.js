// External
import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'

// Internal
import {
    createAndCatchError,
    updateAndCatchError,
    deleteAndCatchError,
} from '../../util/api'
import { onInfo } from '../Notifier/Notifier'
import ArrowBackButton from '../IconButton/ArrowBackButton/ArrowBackButton'
import CalendarButton from '../IconButton/CalendarButton/CalendarButton'
import DeleteButton from '../IconButton/DeleteButton/DeleteButton'
import PriorityButton from '../IconButton/PriorityButton/PriorityButton'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

import './TodoEditor.scss'

const TodoEditor = ({ rootState, triggerUpdateFromChild, history, match }) => {
    let selectedTodo
    if (match.params.id) {
        selectedTodo = rootState.todos.find(
            ({ _id }) => _id === match.params.id
        )
        if (!selectedTodo) {
            onInfo(
                'This URL contains an invalid Todo ID. You are redirected to be allowed to create a new valid todo.'
            )
            setTimeout(history.push('/editor'), 5000)
        }
    }

    const initialTempState =
        match.params.id && selectedTodo
            ? {
                  ...selectedTodo,
              }
            : {
                  title: '',
                  content: '',
                  due: '',
                  priority: 3,
                  isDone: false,
              }

    const [chosenToSetDue, setChosenToSetDue] = useState(false)
    const [tempState, setTempState] = useState(initialTempState)
    const { title, content, due, priority, isDone } = tempState

    const handleChange = (key, value) => {
        setTempState(state => ({
            ...state,
            [key]: value,
        }))
    }

    const handleAbort = hasClickedBackButton => {
        const confirm = verb =>
            window.confirm(`Are you sure you want to ${verb}?`)
        if (
            !hasClickedBackButton &&
            match.params.id &&
            confirm('delete this todo')
        ) {
            deleteAndCatchError(match.params.id, triggerUpdateFromChild)
            history.push('/')
        } else {
            if (confirm('abort')) {
                setTempState(() => initialTempState)
                history.push('/')
            }
        }
    }

    return (
        <>
            <div id="todo-editor-options">
                <ArrowBackButton handleClick={() => handleAbort(true)} />
                <Checkbox
                    isChecked={isDone}
                    handleClick={() => handleChange('isDone', !isDone)}
                />
                <CalendarButton
                    time={due}
                    handleClickOk={moment => {
                        handleChange('due', moment.valueOf())
                        setChosenToSetDue(() => true)
                    }}
                    tooltipPosition="bottom"
                />
                <PriorityButton
                    priority={priority}
                    handleClick={level => handleChange('priority', level)}
                    tooltipPosition="bottom"
                />
                <DeleteButton
                    className="margin-right"
                    handleClick={() => handleAbort(false)}
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
                            if (!match.params.id) {
                                await createAndCatchError(
                                    {
                                        ...tempState,
                                        due: chosenToSetDue ? due : '',
                                    },
                                    triggerUpdateFromChild
                                )
                            } else {
                                await updateAndCatchError(
                                    match.params.id,
                                    tempState,
                                    triggerUpdateFromChild
                                )
                            }
                            history.push('/')
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
    rootState: PropTypes.object,
    triggerUpdateFromChild: PropTypes.func,
    history: PropTypes.object,
    match: PropTypes.object,
}

export default withRouter(TodoEditor)
