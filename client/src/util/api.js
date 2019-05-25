// External
import 'dotenv/config'

// Internal
import { SimpleFetch } from './simpleFetch'

const simpleFetch = new SimpleFetch('https://35.208.190.165/')

const getTodos = onError => simpleFetch.getMethod('todo', onError)

const createTodo = (todo, onError) =>
    simpleFetch.postMethod('todo', todo, onError)

const updateTodo = (todoId, todo, onError) =>
    simpleFetch.putMethod(`todo/${todoId}`, todo, onError)

const deleteTodo = (todoId, onError) =>
    simpleFetch.deleteMethod(`todo/${todoId}`, onError)

export { getTodos, createTodo, updateTodo, deleteTodo }
