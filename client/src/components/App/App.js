import React from 'react';
import './App.sass';
import TodoList from '../TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList test={"test"}/>
    </div>
  );
}

export default App;
