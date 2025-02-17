import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'omgsrt'
      }

      console.log('Life Cycle B Constructed')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life Cycle B getDerivedStateFromProps Started')
        return null
    }

    componentDidMount(){
        console.log('Life Cycle B componentDidMount Started')
    }

    shouldComponentUpdate() {
      console.log('Life Cycle B shouldComponentUpdate Started')
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Life Cycle B getSnapshotBeforeUpdate Started')
      return null
    }

    componentDidUpdate() {
      console.log('Life Cycle B componentDidUpdate Started')
    }

  render() {
    console.log('Life Cycle B Rendered')
    return (
      <div>
        Life Cycle B
      </div>
    )
  }
}

export default LifeCycleB