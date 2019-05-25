// External
import React, { useEffect, useState } from 'react'
import useForceUpdate from 'use-force-update'
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
        isNewNote: true,
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
            console.log(todos)
            setRootState(state => ({
                ...state,
                todos,
            }))
        }
        fetchData()
    }, [rootState.updateUtility])

    const setRootStateInChild = (key, value) => {
        setRootState(state => ({
            ...state,
            [key]: value,
        }))
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

    return (
        <div className="App">
            <Slider ref={slider => (sliderElement = slider)} {...settings}>
                <section id="todo-container">
                    <TodoList
                        setRootState={setRootStateInChild}
                        rootState={rootState}
                        handleSlideLeft={() => sliderElement.slickNext()}
                    />
                </section>
                <section id="todo-editor">
                    <TodoEditor
                        setRootState={setRootStateInChild}
                        rootState={rootState}
                        handleSlideRight={() => {
                            sliderElement.slickPrev()
                        }}
                    />
                </section>
            </Slider>
        </div>
    )
}
export default App
