const express = require('express')

const router = express.Router()

let todos = []

router.get('/todos', (req, res, next) => {
  res.json({ todos: todos })
})

router.post('/todos', (req, res, next) => {
  const newTodo = { id: new Date().toISOString(), text: req.body.text }
  todos.push(newTodo)
  res.status(201).json({
    message: 'ToDo Created!',
    todo: newTodo,
  })
})

router.put('/todos/:todoId', (req, res, next) => {
  const { todoId } = req.params
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === todoId
  })
  todos[todoIndex] = {
    id: todos[todoIndex].id,
    text: req.body.text,
  }
  res.status(200).json({
    message: 'Updated ToDo!',
  })
})

router.delete('/todos/:todoId', (req, res, next) => {
  const { todoId } = req.params
  todos = todos.filter((todo) => todo.id !== todoId)
  res.status(200).json({
    message: 'ToDo Deleted!',
  })
})

module.exports = router
