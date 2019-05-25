// External
import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import si from 'shortid'

// Internal
import { getTodos } from '../../util/api'
import { onError } from '../ErrorHandler/ErrorHandler'
import Button from '../Button/Button'
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const getTime = (date = '') => new Date(date).getTime()

const TodoList = ({ setRootState, rootState, handleSlideLeft }) => {
    const { todos } = rootState

    const handleClick = isNewNote => {
        setRootState('isNewNote', isNewNote)
        handleSlideLeft()
    }

    return (
        <>
            <Button id="add-todo-button" handleClick={() => handleClick(true)}>
                <p>Add a new todo</p>
            </Button>
            {todos ? (
                todos.map(todo => (
                    <TodoPreview
                        key={si.generate()}
                        handleSlideLeft={() => handleClick(false)}
                        setRootState={setRootState}
                        updateUtility={rootState.updateUtility}
                        {...todo}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

TodoList.propTypes = {}

export default TodoList
