import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, role} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome { name } with role { role }</h1>
    }
}

export default Welcome