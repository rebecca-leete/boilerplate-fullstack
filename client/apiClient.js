import request from 'superagent'

const starWarsRootUrl = 'https://swapi.co/api/';

export function getStarWarsPeople () {
  return request.get(`${starWarsRootUrl}people/`)
    .then(res => {
      // console.log(res.body)
      return res.body
    })
}

export function getNorrisFact () {
  return request.get(`/api/norris`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

export function getDonaldQuote () {
  return request.get(`/api/donald`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
