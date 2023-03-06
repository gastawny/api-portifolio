import express from 'express'
import dataBase from './config/dbConnect'
import routes from './routes'
import cors from 'cors'

dataBase.on('error', console.log.bind(console, 'connection error'))
dataBase.once('open', () => {
  console.log('successful connection to the database')
})

const app = express()
app.use(express.json())
app.use(cors())
routes(app)
app.listen(8000, () => console.log('listening...'))
