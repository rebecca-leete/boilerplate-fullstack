import React from 'react'

import {getRandomQuote, getRandomPersonalAttack} from '../trump'
import {analyseQuote} from '../sentiment'

class TrumpQuote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: '',
      results: {}
    }
  }

  componentDidMount () {
    getRandomQuote().then(quote => {
      this.setState({
        quote
      })
      analyseQuote(quote)
        .then(results => {
          console.log(results);
          this.setState({
            results
          })
        })
    })
  }

  render () {
    console.log(this.state.results);
    
    return (
      <div className='quote'>
        <h2>Trump said:</h2>
        <p>{this.state.quote}</p>
        <h2>Analysis: </h2>
        <p>{this.state.results.sentiment}</p>
      </div>
    )
  }
}

export default TrumpQuote
