import React from 'react'

function ListRendering() {
    const nameList = ['Jerry', 'Jake', 'Marvel']
    const maped =   nameList.map(name => <h2>{name}</h2>)
    const personList = [
        {
            name: 'Jerry Jake',
            skill: 'Software Engineer',
            age: 21
        },
        {
            name: 'Elon Musk',
            skill: 'CEO of X',
            age: 41
        },
        {
            name: 'Mark Zurkarburg ',
            skill: 'Computer Engineer',
            age: 39
        }
    ]
  return (
    <div>
        <h2>ListRendering</h2>
        <h6>{maped}</h6>
    <div>
        {
            personList.map(persons => (
                <h6>Hi!, everyone my name is {persons.name}, am a {persons.skill} and am {persons.age} years old I love myself because I see no one who code more than I do</h6>
            ))
        }
    </div>
    </div>
  )
}

export default ListRendering