import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, decrementByAmount, increment, incrementByAmount, setToZero } from './redux/counter';

export default function CounterRedux() {
 const count = useSelector((state) => state.count);
 const dispatch = useDispatch();
    return (
        <>
         <h1>The Count is: {count}</h1>
         <button onClick={() => dispatch(increment())}>increment</button>
         <button onClick={() => dispatch(decrement())}>decrement</button>
         <button onClick={() => dispatch(incrementByAmount(8))}>increment by 8</button>
         <button onClick={() => dispatch(decrementByAmount(8))}>decrement by 8</button>
         <button onClick={() => dispatch(setToZero())}>reset</button>
        </>
    )
}

