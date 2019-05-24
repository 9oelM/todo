// External
import React from 'react'

// Internal
import TodoList from '../TodoList/TodoList'
import './App.scss'

const App = () => {
    return (
        <div className="App">
            <div id="todo-container">
                <TodoList />
            </div>
        </div>
    )
}
export default App
