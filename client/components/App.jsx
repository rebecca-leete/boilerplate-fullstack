import React from 'react'

import {getStarWarsPeople, getNorrisFact} from '../apiClient'
import Character from './Character'



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      starWarsPeople: [],
      norrisFact: {}
    }

    this.norrisFact = this.norrisFact.bind(this)
  }

  componentDidMount () {
    console.log('The comp mounted')
    getStarWarsPeople()
      .then(data => {
        this.setState({
          starWarsPeople: data.results
        })
      })
  }

  norrisFact(name) {
    getNorrisFact()
      .then(data => {
        this.setState({
          norrisFact: data.value
        })
      })

  }

  render () {
    console.log(this.state.starWarsPeople);
    return (
      <div className='app'>
        <img src="donald.png" />
        <h1>Star Norris Tronald Dump</h1>
        {this.state.starWarsPeople.map((person) => {
          return (
            <Character person={person.name} />
          )
        })}
      </div>
    )
  }
}

export default App
