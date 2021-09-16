import React from 'react';

/* function Greet(){
    return <h5>First React App</h5>;
} */

const Greet = (props) =>{
    return(
        <div>
        <h5>First React App, Welcomes {props.name} aka {props.hero}</h5>
        {props.children}
        </div>
    ) 
} 

export default Greet;