import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor (props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  decrement = () => {
    let newSecondsLeft = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newSecondsLeft
    }) 
  }

  render () {
    let boom = this.state.secondsLeft == 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div onClick={this.decrement}>
        <p>{ boom }</p>
      </div>
    )
  }
}