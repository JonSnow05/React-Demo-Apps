import React from 'react'
import Person from './Person'

function PersonList() {

    const persons =[
        {
            id:1,
            name:'Abc',
            skill:'React'
        },
        {
            id:2,
            name:'Xyz',
            skill:'Angular'
        },
        {
            id:3,
            name:'Ijk',
            skill:'Vue'
        }
    ]
    return (
        <div>
            <Person key={persons.id} persons={persons}/>
        </div>
    )
}

export default PersonList
