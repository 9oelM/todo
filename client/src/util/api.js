// External
import 'dotenv/config'

// Internal
import { SimpleFetch } from './simpleFetch'
import { onError } from '../components/ErrorHandler/ErrorHandler'

const simpleFetch = new SimpleFetch('https://35.208.190.165/')

const getTodos = onError => simpleFetch.getMethod('todo', onError)

const createTodo = (todo, onError) =>
    simpleFetch.postMethod('todo', todo, onError)

const updateTodo = (todoId, todo, onError) =>
    simpleFetch.putMethod(`todo/${todoId}`, todo, onError)

const deleteTodo = (todoId, onError) =>
    simpleFetch.deleteMethod(`todo/${todoId}`, onError)

const getAndCatchError = async () =>
    await getTodos(() =>
        onError(
            'An error occurred in the server while fetching from it',
            getAndCatchError
        )
    )

const createAndCatchError = async (sendObj, cb) => {
    await createTodo(sendObj, () =>
        onError(
            'An error occurred in the server while saving todo.',
            createAndCatchError
        )
    )
    cb()
}

const updateAndCatchError = async (id, sendObj, cb) => {
    await updateTodo(id, sendObj, () =>
        onError('An error occurred in the server while updating', () =>
            updateAndCatchError(id)
        )
    )
    cb()
}

const deleteAndCatchError = async (id, cb) => {
    await deleteTodo(id, () =>
        onError('An error occurred in the server while deleting.', () =>
            deleteAndCatchError(id)
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
