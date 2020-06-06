import express, { response } from 'express'
import routes from './routes'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'

const dotenvCustomConfig = { path: path.resolve(__dirname, '..', process.env.NODE_ENV === 'test' ? '.env.testing':'.env'), debug: Boolean(process.env.DEBUG) }
dotenv.parse(Buffer.from('BASIC=basic'), dotenvCustomConfig)
const dotenvConfig = dotenv.config()
if (dotenvConfig.error) {
    throw dotenvConfig.error
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('./uploads', express.static(path.resolve(__dirname, '..', '/uploads')))

app.listen(3333)