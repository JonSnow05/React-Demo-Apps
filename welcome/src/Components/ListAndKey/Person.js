import React from 'react'

function Person({persons}) {

    const person = persons.map(p => (<h2>Name: {p.name} <br/> Skill: {p.skill} </h2>))
    return (
        <div>
            {person}
        </div>
    )
}

export default Person
