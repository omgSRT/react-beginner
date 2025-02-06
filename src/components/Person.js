import React from 'react'

function Person({person, key}) {
  return (
    <h2>{person.id}. I Am {person.name}. I Am {person.age}. I Am {person.role}.</h2>
  )
}

export default Person