// External
import Express from 'express'
import BodyParser from 'body-parser'
import Mongoose from 'mongoose'
import Cors from 'cors'

// for now we are not using https.
//import https from 'https'
//import fs from 'fs'

// Internal
import routes from './routes/index'

const db = Mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('Connected to mongodb server')
})
Mongoose.Promise = global.Promise
const dbUrl = 'mongodb://localhost:27017/todo'
Mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => console.log(`Connected to ${dbUrl}`))
    .catch(e => console.error(e))

const app = Express()
app.use(Cors())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(BodyParser.json())
app.use('', routes)

app.get('/', (req, res) => {
    res.send(`
    GET /todo\n
    POST /todo\n
    PUT /todo/:id\n
    DELETE /todo/:id\n
  `)
})

const port = 8081
/*
https
    .createServer(
        {
            key: fs.readFileSync('./key.pem'),
            cert: fs.readFileSync('./cert.pem'),
            passphrase: 'joel',
        },
        app
    )*/
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
