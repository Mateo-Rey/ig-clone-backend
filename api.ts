import express from 'express'
import cors from 'cors'
import { photoRouter } from './src/routers/photo-router'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/photos', photoRouter)
// app.use('/add-photo', photoRouter)

app.listen(5001, () => {
    console.log('running on port 5001')
})