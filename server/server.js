const path = require('path')
const express = require('express')

const trumpRoutes = require('./routes/trumpCard')
const sentimentRoutes = require('./routes/sentiment')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/quotes', trumpRoutes)
server.use('/sentiment', sentimentRoutes)

module.exports = server
