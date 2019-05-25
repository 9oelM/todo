// External
import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Internal
import { getTodos } from '../../api/api'
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import './App.scss'

const App = () => {
    let sliderElement
    const settings = {
        speed: 500,
        infinite: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'app-slider',
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await getTodos()
            console.log(result)
        }

        fetchData()
    }, [])

    return (
        <div className="App">
            <Slider ref={slider => (sliderElement = slider)} {...settings}>
                <section id="todo-container">
                    <TodoList
                        handleSlideLeft={() => sliderElement.slickNext()}
                    />
                </section>
                <section id="todo-editor">
                    <TodoEditor
                        handleSlideRight={() => sliderElement.slickPrev()}
                    />
                </section>
            </Slider>
        </div>
    )
}
export default App
