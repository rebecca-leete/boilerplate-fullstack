const path = require('path')
const express = require('express')
const request = require('superagent')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

    

server.get('/api/norris', function(req, res) {
    request.get(`https://api.chucknorris.io/jokes/random`)
      .then(response => {
        console.log(response.body)
        res.json(response.body)
      })
})

server.get('/api/donald', function(req, res) {
    request.get(`https://api.tronalddump.io/random/quote`)
      .then(response => {
        console.log(response.body)
        res.json(response.body)
      })
})






module.exports = server
