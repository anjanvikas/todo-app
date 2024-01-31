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

mongoose.connect("mongodb+srv://anjanvikas2001:jFBEg8MvbXTo00Qw@cluster0.w4gc9yr.mongodb.net/todo-app")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) =>{
    console.error('Error connecting to MongoDB', error);
});

const todoSchema = new mongoose.Schema({ 
    title : String,
    description : String,
    completed : Boolean,
});

// connect to db
//sync

const Todo = mongoose.model('todos',todoSchema);

module.exports = {Todo};