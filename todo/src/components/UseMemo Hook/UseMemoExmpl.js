import React,{useState,useMemo} from 'react';


function UseMemoExmpl() {
 
    const [CounterOne, setCounterOne] = useState(0);
    const [CounterTwo, setCounterTwo] = useState(0);

    const incrementOne = () =>{
        setCounterOne(CounterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i =0
        while(i<900000000) i++
        return CounterOne % 2 === 0
    }, [CounterOne])

    return (
        <div>
            <button onClick={incrementOne}>CounterOne - {CounterOne}</button>
            {isEven ? 'Even' : 'Odd'} <br/>
            <button onClick={incrementTwo}>CounterTwo - {CounterTwo}</button>
        </div>
    )
}

export default UseMemoExmpl
