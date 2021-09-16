import React from 'react'

function Person() {

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
            id:2,
            name:'Ijk',
            skill:'Vue'
        }
    ]
    return (
        <div>
            <Person persons={persons}/>
        </div>
    )
}

export default Person
