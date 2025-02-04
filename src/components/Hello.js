import React from "react";

const Hello = () => {
    // return (
    //     <div className='statelessClass'>
    //         <h1>Hello Sir/Madam</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        { id: 'hello', className: 'statelessClass' }, 
        React.createElement('h1', null, 'Hello Sir/Madam')
    )
}

export default Hello