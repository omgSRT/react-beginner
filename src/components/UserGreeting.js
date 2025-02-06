import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    return this.state.isLoggedIn && <div>Welcome Me</div>

    // return(
    //     this.state.isLoggedIn 
    //     ? <div>Welcome Me</div>
    //     : <div>Welcome Guest</div>
    // )

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Me</div>
    // }
    // else {
    //     message = <div>Welcome Guest</div>
    // }

    // return(
    //     <div>
    //         <div>{message}</div>
    //     </div>
    // )

    // if(this.state.isLoggedIn) {
    //     return(
    //         <div>
    //             <div>Welcome Me</div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //           <div>Welcome Guest</div>
    //         </div>
    //       )
    // }
  }
}

export default UserGreeting