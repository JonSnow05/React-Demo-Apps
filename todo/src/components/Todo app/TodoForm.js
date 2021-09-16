import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id : Math.floor(Math.random() * 20),
        text : input
    });

    setInput('');
  };

  return (
    
      <form className='todo-form'>
        <input
          name="text"
          value={input}
          placeholder="Write Todo here"
          onChange={handleChange}
          className='todo-input'
        />
        <button onClick={handleSubmit} className='todo-button'> Add Todo</button>
      </form>
  );
}

export default TodoForm;
