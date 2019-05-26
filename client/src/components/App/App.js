// External
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Internal
import { getTodos } from '../../util/api'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import { onError } from '../ErrorHandler/ErrorHandler'
import './App.scss'

const App = () => {
    const [rootState, setRootState] = useState({
        todos: [],
        isNewNote: true,
        selectedTodoId: -1,
        updateUtility: 0,
    })

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos(() =>
                onError(
                    'An error occurred in the server while fetching from it',
                    fetchData
                )
            )
            setRootState(state => ({
                ...state,
                todos,
            }))
        }
        fetchData()
    }, [rootState.updateUtility])

    const setRootStateInChild = (key, value, callback) => {
        setRootState(
            state => ({
                ...state,
                [key]: value,
            }),
            callback
        )
    }

    const settings = {
        speed: 500,
        infinite: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'app-slider',
    }
    let sliderElement
    const selectedTodo = rootState.todos.find(
        ({ _id }) => _id === rootState.selectedTodoId
    )

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
        <div className="App">
            <Route path="/" exact component={TodoList} />
            <Route path="/:id" component={TodoEditor} />
        </div>
    )
}
export default App
