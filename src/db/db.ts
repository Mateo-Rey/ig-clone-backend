import express from 'express'
import cors from 'cors'
import {MongoClient} from 'mongodb'
import {uri} from './dbsecrets'


const client = new MongoClient(uri)

export const db = client.db("BocaCode")

