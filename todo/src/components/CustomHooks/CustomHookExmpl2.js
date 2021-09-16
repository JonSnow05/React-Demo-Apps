import React from 'react'
import useCounterHook2 from '../Hooks/useCounterHook2'

function CustomHookExmpl2() {
 
    const [count,increment,decrement,reset] = useCounterHook2()
    
    return (
        <div>
            <h2>Counter - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookExmpl2
