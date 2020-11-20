const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    },
    isCreated:{
        type:Date,
        default:Date.now()
    }
})


const Todo = mongoose.model('todo',TodoSchema);
module.exports = Todo;