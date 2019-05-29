import Express from 'express'
import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from '../controllers/index'

const router = Express.Router()

router.get('/todo', getTodos)

router.post('/todo', createTodo)

router.put('/todo/:id', updateTodo)

router.delete('/todo/:id', deleteTodo)

export default router
