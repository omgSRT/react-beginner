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