import { useEffect, useState } from "react";


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodoList = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: todos.length+1, // You can generate a unique ID here if needed
      text: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleCompleted = (id) => {{
    setTodos(todos.map  (todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      else{
        return todo;
      }
    }))
  }
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
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
            <input type="checkbox"  checked={todo.completed} onChange={ ()=> toggleCompleted(todo.id)}/>
           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

