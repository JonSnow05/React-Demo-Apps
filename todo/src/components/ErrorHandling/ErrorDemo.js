import React from 'react'

function ErrorDemo({hero}) {

    if(hero === 'Joker'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            <h3>{hero}</h3>
        </div>
    )
}

export default ErrorDemo
