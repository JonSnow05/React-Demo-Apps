import React, { useState } from 'react'
import useCounterHook from '../Hooks/useCounterHook'

function CustomHookExmpl() {

    const [count, setCount] = useState(0);
    useCounterHook(count);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> CLick {count}</button>        
        </div>
    )
}

export default CustomHookExmpl
