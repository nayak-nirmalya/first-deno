import { Application } from 'https://deno.land/x/oak/mod.ts'

import todoRoutes from './routes/todo.ts'

const app = new Application()

app.use(async (ctx, next) => {
  console.log('Middleware!')
  await next()
})

app.use(todoRoutes.routes())
app.use(todoRoutes.allowedMethods())

await app.listen({ port: 3000 })
