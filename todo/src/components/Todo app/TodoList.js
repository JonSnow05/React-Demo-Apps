import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
    const [abc, setAbc] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    
    localStorage.setItem("abcd", JSON.stringify(todo));
    /* const todoss = localStorage.getItem("todoss"); */
    setAbc([localStorage.getItem("abcd")])
    setTodos([todo, ...todos]);
    console.log(abc);
  };

  const deleteTodo = (id) => {
    const removeTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  return (
    <div>
      <h1>Todo's For Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
