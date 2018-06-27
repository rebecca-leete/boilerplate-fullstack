import React from 'react'
import TrumpQuote from './TrumpQuote'


class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app'>
        <TrumpQuote />
      </div>
    )
  }
}

export default App
