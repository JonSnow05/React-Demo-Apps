import React, { useState,useEffect } from 'react'

function CounterUsingUseEffect() {
    const [count, setCount] = useState(0);
 useEffect(() => {
     document.title = `You Clicked ${count} times`;
 })
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Counter {count}</button>
        </div>
    )
}

export default CounterUsingUseEffect