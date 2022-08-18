import {MongoClient} from 'mongodb'
import {uri} from './dbsecrets'


const client = new MongoClient(uri)

export const db = client.db("instagram-clone-db")

