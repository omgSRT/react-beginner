import React from 'react'

// function Hello() {
//     return <h1>Hello Sir/Madam</h1>
// }

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Greetings, { props.name } with role { props.role }</h1>
            {props.children}
        </div>
    )
}

export default Greet