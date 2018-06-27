const request = require('superagent')

const trumpUrl = 'https://api.whatdoestrumpthink.com/api/'

const express = require('express')

const router = express.Router()

router.get('/random', (req, res) => {
  request.get(trumpUrl + 'v1/quotes/random')
  .then(trumpRes => {
    res.json({quote: trumpRes.body.message})
  })
})

router.get('/peronalized', (req, res) => {
  const name = req.query.q
  request.get(trumpUrl + `v1/quotes/personalized?q=${name}`)
  .then(trumpRes => {
    res.json({quote: trumpRes.body.message})
  })
})

module.exports = router
