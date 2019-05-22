// Internal
import { SimpleFetch } from './util'

const simpleFetch = new SimpleFetch('localhost:8888')

const getTodos = () => simpleFetch.getMethod('todo')

const createTodo = todo => simpleFetch.postMethod('todo', todo)

const updateTodo = (todoId, todo) =>
    simpleFetch.putMethod(`todo/${todoId}`, todo)

const deleteTodo = todoId => simpleFetch.deleteMethod('todo/${todoId}')

export { getTodos, createTodo, updateTodo, deleteTodo }
