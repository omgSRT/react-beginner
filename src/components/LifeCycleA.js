import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'omgsrt'
      }

      console.log('Life Cycle A Constructed')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life Cycle A getDerivedStateFromProps Started')
        return null
    }

    componentDidMount(){
        console.log('Life Cycle A componentDidMount Started')
    }

  render() {
    console.log('Life Cycle A Rendered')
    return (
      <div>
        <div>Life Cycle A</div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA