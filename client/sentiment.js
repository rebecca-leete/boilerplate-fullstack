import request from 'superagent'

function analyseQuote(quote) {
  console.log(`anlysing ${quote}`);
  
  return request.post('/sentiment')
            .query({quote})
            .then(res => {
              console.log(res);
              return res
            })
}

module.exports = {
  analyseQuote
}