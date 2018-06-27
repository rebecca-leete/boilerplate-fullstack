import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

class Beer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
    }

    componentDidMount() {
        console.log('wtf')

        // getting an array of beers...
        request
            .get('https://api.punkapi.com/v2/beers/' + this.props.match.params.id)
            .then(res => {
                console.log(res.body[0]['food_pairing'])

                this.setState({
                    beer: res.body[0]
                })
            })
    }

    render() {
        return (
            <React.Fragment>

                <h1>{this.state.beer.name}</h1>
                <h3><em>{this.state.beer.tagline}</em></h3>
                <hr />
                <h3>Description:</h3>
                <p>
                    {this.state.beer.description}
                </p>

                <h3>Food Pairings:</h3>
                <ul>
                    {this.state.beer['food_pairing'] && this.state.beer["food_pairing"].map(eachFood => {
                        return <li>{eachFood}</li>
                    })}
                </ul>

                    <button><Link to='/'>Back to Beers</Link></button>

            </React.Fragment>
        )
    }
}

export default Beer
