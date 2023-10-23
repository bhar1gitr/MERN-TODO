const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type: String,
    },
    status: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model('todo', todoSchema);
