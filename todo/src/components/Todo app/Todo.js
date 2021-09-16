import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Todo = ({ todos, deleteTodo }) => {
  
  return todos.map((todo, index) => (
    <div key={index} className="todo-row">
      <div ><input type="checkbox" className='strikethrough'/> <span>{todo.text}</span> </div>
      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => deleteTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
