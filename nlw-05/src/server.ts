import express from 'express'

import { routes } from './routes'

import './database'

const app = express()

app.listen(3333, () => {
    console.log('ligado')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)