import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
  render() {
    const { name,count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name} Hovered {count} Times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)