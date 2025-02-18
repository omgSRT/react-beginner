import React, { PureComponent } from 'react'
import '../tailwind/tailwindOutput.css'

class PureComp extends PureComponent {
  render(props) {
    console.log('Pure Component Render')
    return (
      <div>
        <h1>Pure Component {this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp