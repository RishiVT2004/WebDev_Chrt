const zod = require('zod');

const CreateTodoSchema = zod.object({ // first request 
    title : zod.string(),
    description : zod.string().min(5)
})

const UpdateTodoSchema = zod.object({ // third req , id -> gives completed task
    id : zod.string()
})

module.exports = {
    CreateTodoSchema : CreateTodoSchema,
    UpdateTodoSchema : UpdateTodoSchema
}