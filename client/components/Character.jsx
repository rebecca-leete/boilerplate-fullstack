import React from 'react'
import { getNorrisFact, getDonaldQuote } from '../apiClient'

class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: ''
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    componentDidMount() {
        this.setState({
            person: this.props.person
        })
    }

    handleButtonClick(name) {

        getNorrisFact()
            .then(data => {
                ////////////////////////
                let starryString = data.value.replace('Chuck Norris', this.state.person);
                starryString = starryString.replace('Chuck', this.state.person)
                ////////////////////////
                this.setState({
                    fact: starryString
                })
            })
            .then(() => {
                getDonaldQuote()
                    .then(data => {
                        // let donaldString = data.value.replace(/I /g, 'I, '+this.state.person+' ');
                        // donaldString = donaldString.replace(/me /gi, this.state.person+' ')
                        let donaldString = data.value.replace(/she /gi, this.state.person+' ')
                        donaldString = donaldString.replace(/ he /gi, ' '+this.state.person+' ')
                        donaldString = donaldString.replace(/.He /g, this.state.person+' ')
                        donaldString = donaldString.replace(/ his /gi, ' '+this.state.person+"'s ")
                        donaldString = donaldString.replace(/.his /gi, "."+this.state.person+"'s ")
                        donaldString = donaldString.replace(/ her /gi, ' '+this.state.person+"'s ")
                        donaldString = donaldString.replace(/.her /gi, '.'+this.state.person+"'s ")

                        this.setState({
                            opinion: donaldString
                        })

                        console.log(data.value)
                    })
            })

    }

    render() {
        console.log(this.state.person)
        return (
            <React.Fragment>
                {!this.state.fact &&
                    <span className="character">
                        <span className="name">{this.props.person} --> </span>
                        <span className="button"><button onClick={() => this.handleButtonClick(this.props.person)}>Hit Me!</button></span>
                    </span>}

                {this.state.fact &&
                    <span className="character">
                        <span className="name">{this.props.person} --> </span>
                        <span className="fact">{this.state.fact}</span>
                        <span className="opinion">{this.state.opinion}</span>
                    </span>}
                <br />
            </React.Fragment>
        )
    }
}

export default Character