import React, { useState } from 'react'

function UseStateWithObject() {
    const[name, setName]=useState({firstName:'', lastName:''})
    return (
        <div>
            <input type='text' onChange={(e) => setName({...name, firstName:e.target.value})} value={name.firstName} />
            <input type='text' onChange={(e) => setName({...name, lastName:e.target.value})} value={name.lastName}/><br/>
            <h3>{name.firstName}</h3> <h3>{name.lastName}</h3>
        </div>
    )
}

export default UseStateWithObject

//if we dont use ...name in setName() then one of name will be cleared e.g if we update firstname the lastname will clear and vice versa