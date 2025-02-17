import React from 'react'
import '../css/myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''

  return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet1</h1>
    </div>
  )
}

export default StyleSheet