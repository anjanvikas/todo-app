const zod = require('zod');

const todoItemSchema = zod.object({
    title : zod.string(),
    description : zod.string(),
});

const updateItemSchema = zod.object({
    id :zod.string(),
});

module.exports = {
    todoItemSchema :todoItemSchema,
    updateItemSchema : updateItemSchema
}