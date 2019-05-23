// External
import React, { useCallback, useState } from 'react'
import { PropTypes } from 'prop-types'
import si from 'shortid'

// Internal
import Button from '../Button/Button'
import TodoPreview from './TodoPreview/TodoPreview'
import './TodoList.scss'

const getTime = (date = '') => new Date(date).getTime()

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            lastUpdated: getTime(),
            title: 'Get discharged',
            content: 'Escape from the army after 2 years of suffering.',
            due: getTime('Aug 15 2019 09:30:00 GMT+0900'),
            priority: 2,
            isDone: false,
        },
        {
            id: 2,
            lastUpdated: getTime(),
            title: 'Eat a fried chicken',
            content: 'Fried chicken is a gift from the heaven.',
            due: getTime('May 30 2019 10:00:00 GMT+0900'),
            priority: 1,
            isDone: true,
        },
        {
            id: 3,
            lastUpdated: getTime(),
            title: 'Go to gym',
            content: 'Workout with friends',
            due: getTime('May 23 2019 10:00:00 GMT+0900'),
            priority: 1,
            isDone: true,
        },
        {
            id: 4,
            lastUpdated: getTime(),
            title:
                "Eat, pray, love, eat, sleep, shout, enjoy, meditate. My youth does not go anywhere. And I'm trying to make this a very long title",
            content: 'Great!',
            due: getTime('May 23 2019 10:00:00 GMT+0900'),
            priority: 1,
            isDone: true,
        },
    ])

    return (
        <>
            <Button id="add-todo-button" handleClick={() => {}}>
                <p>Add a new todo</p>
            </Button>
            {todos.map(todo => (
                <TodoPreview key={si.generate()} {...todo} />
            ))}
        </>
    )
}

TodoList.propTypes = {}

export default TodoList
