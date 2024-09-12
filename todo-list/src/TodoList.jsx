import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new to-do with the current date and time
  const addTodo = () => {
    if (newTodo.trim()) {
      const todoItem = {
        id: todos.length + 1, // unique id for each todo starting from 1
        text: newTodo,
        date: new Date().toLocaleString(), // Date and time
      };
      setTodos([...todos, todoItem]);
      setNewTodo(''); // Clear input after adding
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={`item-${index + 1}`}>
            <div>{`${index + 1}. ${todo.text}`}</div> {/* Add number in front of the task */}
            <div className="todo-meta">
              <small>{todo.date}</small> {/* Date and time at the bottom */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
