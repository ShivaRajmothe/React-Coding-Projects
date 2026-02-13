import { useEffect, useState } from "react";
import React from "react";


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodoList = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: 0, // You can generate a unique ID here if needed
      text: inputValue,
      completed: true
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={ () => addTodoList()}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox"  checked={todo.completed}/>
           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

