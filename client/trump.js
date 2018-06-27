import request from 'superagent'

const url = '/'

const cohortNames = [
  'Swamp Logic Stan',
  'PLAGUE THE GREAT AND POWERFUL',
  'King Riki',
  'Cliffhanger',
  'Father Bradley',
  'Rebecca L',
  'Rebecca D',
  'Rise of the Phoenix',
  'Reuben',
  'Kelly',
  'Maaaadog Ross',
  'Antonio Banderez',
  'Tay',
  'Hayden',
  'Dangnash'
]

const getRandomName = () => {
  return cohortNames[Math.floor(Math.random()*cohortNames.length)]
}

const getRandomQuote = () => {
  return request.get(url + 'v1/quotes/random')
  .then(res => {
    return res.body.quote
  })
}

const getRandomPersonalAttack = () => {
  const name = getRandomName()
  return request
    .get(`${url}v1/quotes/peronalized`)
    .query({q: name})
    .then(res => {
      return res.body.quote
    })
}

module.exports = {
  getRandomQuote,
  getRandomPersonalAttack
}