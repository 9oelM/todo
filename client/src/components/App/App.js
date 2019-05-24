// External
import React from 'react'
import ReactSwipe from 'react-swipe'

// Internal
import TodoList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import './App.scss'

const App = () => {
    let reactSwipeEl
    return (
        <div className="App">
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}
            >
                <section id="todo-container">
                    <TodoList handleSlideLeft={() => reactSwipeEl.next()} />
                </section>
                <section id="todo-editor">
                    <TodoEditor handleSlideRight={() => reactSwipeEl.prev()} />
                </section>
            </ReactSwipe>
        </div>
    )
}
export default App
