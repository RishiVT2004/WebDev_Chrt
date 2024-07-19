// contains mongoose schema 
const mongoose = require('mongoose');
const { string, boolean } = require('zod');
mongoose.connect("mongodb+srv://admin_rishi:rishi2004@cluster0.wamdssn.mongodb.net/Todo")

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos' , TodoSchema)

module.exports = {
    todo : todo
}