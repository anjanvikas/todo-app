// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { todoItemSchema, updateItemSchema } = require('./types');
const {Todo} = require('./db');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());





// Get all todos
app.get('/api/todos', async (req, res) => {

// fetch all the todos
try {
    const todos = await Todo.find({});
    res.status(200).json({
        message : todos
    });
} catch (error) {
  res.status(500).json({message : "Internal server error!"});
}


});

// Add new todo
app.post('/api/todo', async (req, res) => {

    const createPayload =  req.body;
    const parsedPayload = todoItemSchema.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return ;
    }

    // put the todo in db
    try{
        await Todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : false
        });
        res.status(200).json({
            msg : "Todo added"
        });
    } catch(err){
        res.status(500).json({
            msg : err
        });
    }

    
});

// mark as completed
app.put('/completed', async (req, res) =>{

    const updatePayload = req.body;
    const parsedPayload = updateItemSchema.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return ;
    }

 // update the todo
 try {
    console.log(req.body.id);
   await Todo.updateOne({
    _id : req.body.id
   },{
    completed : true
   })
   res.status(200).json({
    message : "Updated"
   })
 } catch (error) {
   res.status(500).json({Message: "Internal server error! "+ error});
 }

});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:{PORT}`);
});