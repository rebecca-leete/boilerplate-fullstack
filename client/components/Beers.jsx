import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

// variables????
const beersUrl = 'https://api.punkapi.com/v2/beers'

class Beers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    console.log('wtf')

    // getting an array of beers...
    request
      .get(beersUrl)
      .then(res => {
        this.setState({
          beers: res.body
        })
      })
  }

  render() {
    return (
      <React.Fragment>

        <header>
          <h1>Beers</h1>
        </header>

        <body>

          <div className="container">

            {this.state.beers.map(beer => {
              return (
                <React.Fragment key={beer.id}>
                  <h3><Link to={`/beer/${beer.id}`}>{beer.name}</Link></h3>
                  <p>{beer.description}</p>
                  <br />
                </React.Fragment>
              )
            })}

          </div>

        </body>
      </React.Fragment>
    )
  }
}

export default Beers
