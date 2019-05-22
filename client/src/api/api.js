// Internal
import { SimpleFetch } from './util'

const simpleFetch = new SimpleFetch('localhost:8888')

const getTodos = () => simpleFetch.getMethod('todos')

const createTodo = todo => simpleFetch.postMethod('todos', todo)

const updateTodo = (todoId, todo) =>
    simpleFetch.putMethod(`todos/${todoId}`, todo)

const deleteTodo = todoId => simpleFetch.deleteMethod('todos/${todoId}')

export { getTodos, createTodo, updateTodo, deleteTodo }
