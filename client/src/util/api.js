// External
import 'dotenv/config'

// Internal
import { SimpleFetch } from './simpleFetch'
import { onError } from '../components/Notifier/Notifier'

const simpleFetch = new SimpleFetch(
    process.env.SERVER || 'http://35.208.190.165:8081/'
)

const getTodos = onError => simpleFetch.getMethod('todo', onError)

const createTodo = (todo, onError) =>
    simpleFetch.postMethod('todo', todo, onError)

const updateTodo = (todoId, todo, onError) =>
    simpleFetch.putMethod(`todo/${todoId}`, todo, onError)

const deleteTodo = (todoId, onError) =>
    simpleFetch.deleteMethod(`todo/${todoId}`, onError)

const getAndCatchError = async () =>
    await getTodos(() =>
        onError('An error occurred fetching from the server', getAndCatchError)
    )

const createAndCatchError = async (sendObj, cb) => {
    await createTodo(sendObj, () =>
        onError('An error occurred saving todo.', () =>
            createAndCatchError(sendObj, cb)
        )
    )
    cb()
}

const updateAndCatchError = async (id, sendObj, cb) => {
    await updateTodo(id, sendObj, () =>
        onError('An error occurred updating', () =>
            updateAndCatchError(id, sendObj, cb)
        )
    )
    cb()
}

const deleteAndCatchError = async (id, cb) => {
    await deleteTodo(id, () =>
        onError('An error occurred deleting.', () =>
            deleteAndCatchError(id, cb)
        )
    )
    cb()
}

export {
    getAndCatchError,
    createAndCatchError,
    updateAndCatchError,
    deleteAndCatchError,
}
