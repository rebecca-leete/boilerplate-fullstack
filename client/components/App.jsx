import React from 'react'
import request from 'superagent'

import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import Beers from './Beers'
import Beer from './Beer'

const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={Beers} />
        <Route exact path='/beer/:id' component={Beer} />
      </React.Fragment>
    </Router>
  )
}

export default App
