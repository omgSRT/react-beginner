import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'James', 'Ben', 'Elysia', 'Diona']
    const nameList = names.map(name => <h2>{name}</h2>)
    const people = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            role: 'Admin'
        },
        {
            id: 2,
            name: 'James',
            age: 24,
            role: 'User'
        },
        {
            id: 3,
            name: 'Elysia',
            age: 20,
            role: 'User'
        },
        {
            id: 4,
            name: 'Diona',
            age: 40,
            role: 'User'
        }
    ]
    const peopleList = people.map(person => <Person key={person.id} person={person}/>)
  return (
    <div>
        {peopleList}
    </div>
  )
}

export default NameList