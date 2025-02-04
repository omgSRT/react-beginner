import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Welcome { this.props.name } with role { this.props.role }</h1>
    }
}

export default Welcome