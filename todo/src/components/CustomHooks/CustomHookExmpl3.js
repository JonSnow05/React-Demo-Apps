import React from 'react'
import useInput from '../Hooks/useInput'

function CustomHookExmpl3() {

    const [firstName,bindFirstName,resetFirstName] = useInput('');
    const [lastName,bindLastName,resetLastName] = useInput('');
    
    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
    }

    const onclickHandle = () => {
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input {...bindFirstName}/> <br/>
                <input {...bindLastName}/> <br/>
                <button type='submit'>Submit</button> <button type='button' onClick={onclickHandle}>Reset</button>
            </form>
        </div>
    )
}

export default CustomHookExmpl3
