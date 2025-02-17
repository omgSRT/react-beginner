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

    shouldComponentUpdate() {
      console.log('Life Cycle A shouldComponentUpdate Started')
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Life Cycle A getSnapshotBeforeUpdate Started')
      return null
    }

    componentDidUpdate() {
      console.log('Life Cycle A componentDidUpdate Started')
    }

    changeState = () => {
      this.setState({
        name: 'omg'
      })
    }

  render() {
    console.log('Life Cycle A Rendered')
    return (
      <div>
        <div>Life Cycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA