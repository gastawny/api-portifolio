import express from 'express'
import dataBase from './config/dbConnect'
import routes from './routes'

dataBase.on('error', console.log.bind(console, 'connection error'))
dataBase.once('open', () => {
  console.log('successful connection to the database')
})

const app = express()
routes(app)

const port = 8000

app.listen(port, () => console.log('http://localhost:8000'))
