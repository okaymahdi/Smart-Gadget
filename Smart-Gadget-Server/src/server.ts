import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()

const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
