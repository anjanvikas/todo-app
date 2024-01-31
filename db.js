/*
Todo : 
{
    title : string,
    description : string,
    completed : boolean
}
 */

const mongoose = require('mongoose');

//

mongoose.connect("mongodb+srv://anjanvikas2001:jFBEg8MvbXTo00Qw@cluster0.w4gc9yr.mongodb.net/todo-app");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
});

// connect to db
//sync

const todo = mongoose.model('todos',todoSchema);

module.exports = {todo};