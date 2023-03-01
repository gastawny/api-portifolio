import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('Hello')
})

app.listen(3000, () => console.log('ouvindo...'))
