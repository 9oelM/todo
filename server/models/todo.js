import Mongoose from 'mongoose'
const { Schema } = Mongoose
const { Mixed } = Schema.Types

let TodoSchema = new Schema({
    title: String,
    content: String,
    priority: Number,
    isDone: Boolean,
    due: Mixed,
    lastUpdated: Number,
    // due and lastUpdated represent the number of milliseconds since the Unix Epoch.
})

export default Mongoose.model('Todo', TodoSchema)
