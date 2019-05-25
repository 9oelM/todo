// External
import React, { useCallback, useState } from 'react'
import { PropTypes } from 'prop-types'
import si from 'shortid'

// Internal
import Button from '../Button/Button'
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const getTime = (date = '') => new Date(date).getTime()

const TodoList = ({ todos, handleSlideLeft }) => (
    <>
        <Button id="add-todo-button" handleClick={handleSlideLeft}>
            <p>Add a new todo</p>
        </Button>
        {todos ? (
            todos.map(todo => (
                <TodoPreview
                    key={si.generate()}
                    handleSlideLeft={handleSlideLeft}
                    {...todo}
                />
            ))
        ) : (
            <p>Loading...</p>
        )}
    </>
)

TodoList.propTypes = {}

export default TodoList
