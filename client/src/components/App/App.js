// External
import React from 'react'
import ReactSwipe from 'react-swipe'

// Internal
import TodoList from '../TodoList/TodoList'
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
                <div id="todo-container">
                    <TodoList handleSwipe={() => reactSwipeEl.next()} />
                </div>
                <div id="todo-editor" />
            </ReactSwipe>
        </div>
    )
}
export default App
