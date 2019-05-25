// External
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { toast } from 'react-toastify'

// Internal
import { getTodos } from '../../util/api'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import Message from '../ErrorHandler/ErrorHandler'
import './App.scss'

const App = () => {
    toast.configure()
    const onError = handleRetry =>
        toast.error(
            <Message handleRetry={handleRetry}>
                There was an error while syncing with the server.
            </Message>,
            { autoClose: false, position: 'bottom-left', closeOnClick: false }
        )

    const [rootState, setRootState] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos(() => onError(fetchData))
            setRootState(state => ({
                ...state,
                todos,
            }))
        }
        fetchData()
    }, [])

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
                        todos={rootState.todos}
                        handleSlideLeft={() => sliderElement.slickNext()}
                    />
                </section>
                <section id="todo-editor">
                    <TodoEditor
                        todos={rootState.todos}
                        handleSlideRight={() => sliderElement.slickPrev()}
                    />
                </section>
            </Slider>
        </div>
    )
}
export default App
