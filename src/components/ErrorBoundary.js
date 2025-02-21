import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);        
    }

  render() {
    if(this.state.hasError){
        return (
            <div>
                <h1>Something Has Gone Wrong</h1>
            </div>
        )
    }
    return this.props.children
  }
}

export default ErrorBoundary