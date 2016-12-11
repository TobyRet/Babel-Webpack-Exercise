const express = require('express')
const router = require('./router')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, '../dist')))
app.use(router)

module.exports = app
