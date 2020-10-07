import React, { Component } from 'react'

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState,) {
    return this.state.count !== nextState.count
  }

  render() {
    return (
      <button
        id='counter'
        color={this.props.color}
        style={{
          margin: '0 0 .5rem',
          padding: '1rem 2rem',
          backgroundColor: this.props.color,
          color: '#fff',
        }}
        onClick={() => this.setState(state => ({count: state.count + 1}))}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton
