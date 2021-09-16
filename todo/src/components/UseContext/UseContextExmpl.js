import React,{useContext} from 'react'
import {UserNameContext, UserEmailContext} from '/home/ctp/React/todo/src/App.js'

function UseContextExmpl() {

    const username = useContext(UserNameContext);
    const email = useContext(UserEmailContext);
    return (
        <div>
            <h2>Name: {username} || Email: {email}</h2>
        </div>
    )
}

export default UseContextExmpl
