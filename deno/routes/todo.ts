import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

interface ToDo {
  id: String
  text: String
}

let todos: ToDo[] = []

router.get('/todos', (ctx) => {
  ctx.response.body = { todos: todos }
})

router.post('/todos', async (ctx) => {
  const data = await ctx.request.body()
  const dataFinal = await data.value
  const newToDo: ToDo = {
    id: new Date().toISOString(),
    text: dataFinal.text,
  }
  todos.push(newToDo)
  ctx.response.body = {
    message: 'Created ToDo!',
    todo: newToDo,
  }
})

router.put('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId
  const data = await ctx.request.body()
  const dataFinal = await data.value
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid
  })
  todos[todoIndex] = {
    id: todos[todoIndex].id,
    text: dataFinal.text,
  }
  ctx.response.body = {
    message: 'Updated ToDo!',
  }
})

router.delete('/todos/:todoId', (ctx) => {
  const tid = ctx.params.todoId
  todos = todos.filter((todo) => todo.id !== tid)
  ctx.response.body = {
    message: 'Deleted ToDo!',
  }
})

export default router
