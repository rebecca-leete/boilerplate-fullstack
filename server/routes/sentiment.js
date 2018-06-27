const request = require('superagent')

const sentimentUrl = 'https://community-sentiment.p.mashape.com/text/'

const express = require('express')

const router = express.Router()


router.post('/', (req, res) => {
  const quote = req.query.quote
  console.log(`about to send quote: ${quote}`);
  
  
  request.post('https://community-sentiment.p.mashape.com/text/')
    .send('txt=' + quote)
    .set('X-Mashape-Key', 'GltXDb7m47mshL9jC6IcHPNjd8u3p1hqYfbjsnHOrhLvabjai8')
    .then(sentRes => {

      // console.log('results from api', sentRes.body);
      
      res.send(sentRes)
    })
    .catch(err => {
      console.log(err);
    })
}) 


module.exports = router