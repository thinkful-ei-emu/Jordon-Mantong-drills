// import React from 'react';

// export default class RoulletteGun extends React.Component {
//     static defaultProps = {
//         bulletInChambet: 8,
//     }

//     render() {
//         return (
//             <div>
//                 <p>Spinning the chamber and pulling the trigger! ...</p>
//                 <button onClick={this.setState({})}>Pull the trigger!</button>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
        </button>
            </div>
        )
    }
}