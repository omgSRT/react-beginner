import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor',
            buttonMessage: 'Subcribe'
        }
    }

    changeMessage() {
        if(this.state.message != null && this.state.message === 'Welcome Visitor'){
            this.setState({
                message: 'Thanks For Subcribing',
                buttonMessage: 'Unsubcribe'
            })
        }
        else {
            this.setState({
                message: 'Welcome Visitor',
            buttonMessage: 'Subcribe'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={() => this.changeMessage()}>{ this.state.buttonMessage }</button>
            </div>
        )
    }
}

export default Message