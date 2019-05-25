// External
import 'dotenv/config'

// Internal
import { SimpleFetch } from './util'

const simpleFetch = new SimpleFetch(
    'https://5d2fbf9bed8b47c7abc49447f8d8f150.vfs.cloud9.us-east-1.amazonaws.com:8081/'
)

const getTodos = () => simpleFetch.getMethod('todo')

const createTodo = todo => simpleFetch.postMethod('todo', todo)

const updateTodo = (todoId, todo) =>
    simpleFetch.putMethod(`todo/${todoId}`, todo)

const deleteTodo = todoId => simpleFetch.deleteMethod('todo/${todoId}')

export { getTodos, createTodo, updateTodo, deleteTodo }
