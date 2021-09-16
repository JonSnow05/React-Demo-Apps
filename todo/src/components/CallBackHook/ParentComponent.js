import React, { useState,useCallback } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const [age,setAge] = useState(23);
    const [salary, setSalary] = useState(50000);

    const inrcrementAge = useCallback(
        () => {
            setAge(age +1)
        },
        [age],
    )

    const incrementSal = useCallback(
        () => {
                setSalary(salary + 1000)
        },
        [salary],
    )
    return (
        <div>
            <Title />
            <Count text="Age" count={age}/>
            <Button handleClick={inrcrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSal}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent

