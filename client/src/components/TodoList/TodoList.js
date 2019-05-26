// External
import React, { useEffect, useState, useRef } from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import si from 'shortid'

// Internal
import { getTodos } from '../../util/api'
import Button from '../Button/Button'
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const getTime = date => (date ? new Date(date).getTime() : new Date().getTime())

const TodoList = ({ history, rootState, triggerUpdateFromChild }) => {
    const { todos, isLoading } = rootState

    return (
        <>
            <Button
                id="add-todo-button"
                handleClick={() => history.push('/editor')}
            >
                <p>Add a new todo</p>
            </Button>
            {!isLoading && todos ? (
                todos.map(todo => (
                    <TodoPreview
                        key={si.generate()}
                        triggerUpdateFromChild={triggerUpdateFromChild}
                        {...todo}
                    />
                ))
            ) : (
                <p id="add-todo-loading">Loading...</p>
            )}
        </>
    )
}

TodoList.propTypes = {}

export default withRouter(TodoList)
