import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req: any,res: any) => {
    res.status(200).send('hello')
})



app.listen(5001, () => {
    console.log('running on port 5001')
})