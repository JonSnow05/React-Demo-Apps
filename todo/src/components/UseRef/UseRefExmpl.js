import React, { useEffect, useRef } from 'react'

function UseRefExmpl() {

    const inputTag = useRef(null);

    useEffect(() => {
        inputTag.current.focus();
    },[])
    return (
        <div>
            <input ref={inputTag}/>
        </div>
    )
}

export default UseRefExmpl
