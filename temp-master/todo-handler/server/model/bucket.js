const mongoose = require('mongoose')
const { Schema } = mongoose


const bucketSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    todos: [
        {
            title: {
                type: String
            },
            isCompleted: {
                type: Boolean,
                default: false
            },
            created_at: {
                type: Date,
                default: Date.now
            }
        }
    ],
    created_at: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('bucket', bucketSchema)
