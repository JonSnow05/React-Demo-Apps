import React, { useEffect, useRef, useState } from 'react'

function UseRefExmpl2() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(0);

    useEffect(() => {
        intervalRef.current = setInterval( () => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        /* return () =>{
            console.warn(intervalRef.current)
            clearInterval(intervalRef.current)
        }; */
    },[]);


    return (
        <div>
            Timer - {timer} 
            <button ref={intervalRef} onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        </div>
    )
}

export default UseRefExmpl2
