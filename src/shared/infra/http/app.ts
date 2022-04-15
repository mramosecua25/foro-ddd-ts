import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from "dotenv"

import { router } from './api/api'

dotenv.config()

const origin = {
  origin: '*'
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(morgan('combined'))

app.use('/api', router)

const port = process.env.APP_PORT || 5000;

app.listen(port, () =>{
  console.log(`[Server]: running on port ${port}`);
})