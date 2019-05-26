// External
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Internal
import { getTodos } from '../../util/api'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import { onError } from '../ErrorHandler/ErrorHandler'
import './App.scss'

const App = () => {
    const [rootState, setRootState] = useState({
        todos: [],
        isLoading: false,
    })

    const setRootStateInChild = (key, value) => {
        setRootState(state => ({
            ...state,
            [key]: value,
        }))
    }

    useEffect(() => {
        const fetchData = async () => {
            setRootState(s => ({
                ...s,
                isLoading: true,
            }))
            const todos = await getTodos(() =>
                onError(
                    'An error occurred in the server while fetching from it',
                    fetchData
                )
            )
            setRootState(s => ({
                ...s,
                todos,
                isLoading: false,
            }))
        }
        fetchData()
    }, [])

    const TodoListComponent = () => (
        <section id="todo-list">
            <TodoList setRootState={setRootState} rootState={rootState} />
        </section>
    )

    const TodoEditorComponent = () => (
        <section id="todo-editor">
            <TodoEditor
                setRootState={setRootStateInChild}
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
