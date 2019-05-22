// External
import Express from 'express'
import BodyParser from 'body-parser'
import Mongoose from 'mongoose'

// Internal
import { Todo } from './models/index'

const db = Mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('Connected to mongodb server')
})
Mongoose.Promise = global.Promise
const dbUrl = 'mongodb://localhost:27017/memo'
Mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => console.log(`Connected to {dbUrl}`))
    .catch(e => console.error(e))

const app = Express()
// Body-parser
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())

const port = 8888

app.listen(port, () => {
    console.log(`Server listening on port ${8888}`)
})
