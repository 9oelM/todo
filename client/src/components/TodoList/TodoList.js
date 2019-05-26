// External
import React from 'react'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import si from 'shortid'

// Internal
import Button from '../Button/Button'
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

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

TodoList.propTypes = {
    history: PropTypes.object,
    rootState: PropTypes.object,
    triggerUpdateFromChild: PropTypes.func,
}

export default withRouter(TodoList)
