import express from 'express'
import hello from './hello.world'

const app = express()

app.get('/', (req, res) => res.send(hello()))

export default app
