// External
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Internal
import { getAndCatchError } from '../../util/api'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import './App.scss'

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
        }
        fetchData()
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

    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={TodoListComponent} />
                <Route path="/editor/:id?" component={TodoEditorComponent} />
            </div>
        </Router>
    )
}
export default App
