// External
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import moment from 'moment'

// Internal
import { getAndCatchError } from '../../util/api'
import { onInfo } from '../Notifier/Notifier'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import Button from '../Button/Button'
import './App.scss'

const notifyTodosDueExpiry = todos => {
    let alreadyNotified = []
    let timeouts = []

    const innerLogic = () => {
        if (todos && todos.length !== 0) {
            todos.forEach(({ _id, title, due, isNotified, ...rest }) => {
                const notify = () => {
                    onInfo(
                        `Todo "${title}" has reached its due date (${moment(
                            due
                        ).format()}). Please check.`
                    )
                    alreadyNotified = [...alreadyNotified, _id]
                }
                if (due !== '') {
                    if (
                        due < new Date().getTime() &&
                        !alreadyNotified.includes(_id)
                    )
                        notify()
                    else if (due > new Date().getTime())
                        timeouts = [
                            ...timeouts,
                            setTimeout(notify(), due - new Date().getTime()),
                        ]
                }
            })
            return timeouts
        }
        return []
    }
    return innerLogic()
}

const App = () => {
    const [rootState, setRootState] = useState({
        todos: [],
        isLoading: false,
    })
    const [updateUtil, setUpdateUtil] = useState(0)
    const setUpdateUtilInChild = () =>
        setUpdateUtil(val => (val % 2 ? val + 1 : val - 1))

    useEffect(() => {
        const fetchData = async () => {
            setRootState(s => ({
                ...s,
                isLoading: true,
            }))
            const todos = await getAndCatchError()
            setRootState(s => ({
                ...s,
                todos,
                isLoading: false,
            }))
            return notifyTodosDueExpiry(todos)
        }
        const notifyTodosDueExpirySubscription = fetchData()

        return function cleanup() {
            if (
                notifyTodosDueExpirySubscription &&
                notifyTodosDueExpirySubscription.length > 0
            )
                notifyTodosDueExpirySubscription.forEach(timeout =>
                    clearTimeout(timeout)
                )
        }
    }, [updateUtil])

    const TodoListComponent = () => (
        <section id="todo-list">
            <TodoList
                triggerUpdateFromChild={setUpdateUtilInChild}
                rootState={rootState}
            />
        </section>
    )

    const TodoEditorComponent = () => (
        <section id="todo-editor">
            <TodoEditor
                triggerUpdateFromChild={setUpdateUtilInChild}
                rootState={rootState}
            />
        </section>
    )

    const NoPageFoundComponent = withRouter(({ history }) => (
        <section id="no-page-found">
            <div>
                <p>Oops!</p>
                <p>Something is wrong.</p>
                <p>Please try again.</p>
            </div>
            <Button handleClick={() => history.push('/')}>
                Go to the index page
            </Button>
        </section>
    ))

    const Todolist = (
        <section id="todo-list">
            <TodoList
                setRootState={setRootStateInChild}
                rootState={rootState}
                handleSlideLeft={() => sliderElement.slickNext()}
            />
        </section>
    )

    const TodoEditor = (
        <section id="todo-editor">
            <TodoEditor
                selectedTodo={selectedTodo}
                setRootState={setRootStateInChild}
                rootState={rootState}
                handleSlideRight={() => {
                    sliderElement.slickPrev()
                }}
            />
        </section>
    )
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={TodoListComponent} />
                    <Route
                        path="/editor/:id?"
                        component={TodoEditorComponent}
                    />
                    <Route component={NoPageFoundComponent} />
                </Switch>
            </div>
        </Router>
    )
}
export default App
