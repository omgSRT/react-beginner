import React from 'react'

// function Hello() {
//     return <h1>Hello Sir/Madam</h1>
// }

const Greet = props => {
    const { name, role } = props

    return (
        <div>
            <h1>Greetings, { name } with role { role }</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet