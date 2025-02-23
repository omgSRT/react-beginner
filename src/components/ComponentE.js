import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

//other way of static contextType = UserContext
//ComponentE.contextType = UserContext

export default ComponentE