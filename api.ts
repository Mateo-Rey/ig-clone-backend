import express from 'express'
import cors from 'cors'
import {MongoClient} from 'mongodb'
import {uri} from './dbsecrets'


const client = new MongoClient(uri)

const db = client.db("DamianCluster")



const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req: any,res: any) => {
    res.status(200).send('hello')
})



app.listen(5001, () => {
    console.log('running on port 5001')
})