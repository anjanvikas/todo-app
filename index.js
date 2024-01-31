// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { todoItemSchema, updateItemSchema } = require('./types');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());





// Get all todos
app.get('/api/todos', async (req, res) => {

// fetch all the todos
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
});

// mark as completed
app.put('/completed/{id}', async (req, res) =>{

    const createPayload = req.body;
    const parsedPayload = updateItemSchema.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return ;
    }

    // fetch the todo and update the id.

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:PORT`);
});