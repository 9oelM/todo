import { Todo } from '../models/index'
import { getTime } from '../util/util'
import keyMirror from 'keymirror'

const { log, error } = console
/*
    // server/models/todo.js
    
    const TodoSchema = new Schema({
        title: String,
        content: String,
        priority: Number,
        completed: Boolean,
        due: Number,
        lastUpdated: Number,
    // due and lastUpdated represent the number of milliseconds since the Unix Epoch.
    })
    
    // client/src/api/api.js
    
    const getTodos = () => simpleFetch.getMethod('todos')

    const createTodo = todo => simpleFetch.postMethod('todos', todo)

    const updateTodo = (todoId, todo) =>
    simpleFetch.putMethod(`todos/${todoId}`, todo)

    const deleteTodo = todoId => simpleFetch.deleteMethod('todos/${todoId}')
*/

const WORDS = keyMirror({
    CREATE: null,
    GET: null,
    UPDATE: null,
    DELETE: null,
    FAILURE: null,
    SUCCESS: null,
})

const STATUS = {
    OK: 200,
    CREATED: 201,
    SERVER_ERROR: 500,
}

const logInfo = (method, failOrSuccess, logObj = () => {}) => {
    log(`${method}:${failOrSuccess}`)
    logObj()
}

const getTodos = (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            res.status(STATUS.SERVER_ERROR).json(WORDS.FAILURE)
            logInfo(WORDS.GET, WORDS.FAILURE)
        } else {
            res.status(STATUS.OK).json(todos)
            logInfo(WORDS.GET, WORDS.SUCCESS, () =>
                todos.forEach(todo => log(todo))
            )
        }
    })
}

const createTodo = (req, res) => {
    const { title, content, priority, completed, due } = req.body
    const todo = new Todo({
        lastUpdated: getTime(),
        title,
        content,
        priority,
        completed,
        due,
    })
    todo.save(err => {
        if (err) {
            logInfo(WORDS.CREATE, WORDS.FAILURE)
            res.status(STATUS.CREATED).json(WORDS.FAILURE)
        } else {
            res.status(STATUS.CREATED).json(WORDS.SUCCESS)
            logInfo(WORDS.CREATE, WORDS.SUCCESS, () => log(todo))
        }
    })
}

const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, todo) => {
        if (err) {
            logInfo(WORDS.UPDATE, WORDS.FAILURE)
            res.status(STATUS.SERVER_ERROR).json(WORDS.FAILURE)
        } else {
            res.status(STATUS.OK).json(WORDS.SUCCESS)
            logInfo(WORDS.UPDATE, WORDS.SUCCESS, () => log(todo))
        }
    })
}

const deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, err => {
        if (err) {
            logInfo(WORDS.DELETE, WORDS.FAILURE)
            res.status(STATUS.SERVER_ERROR).json(WORDS.FAILURE)
        } else {
            res.status(STATUS.OK).json(WORDS.SUCCESS)
            logInfo(WORDS.DELETE, WORDS.SUCCESS, () => log(`${req.params.id}`))
        }
    })
}

export { getTodos, createTodo, updateTodo, deleteTodo }
