// src/components/Todo.js
import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <><div >
      <h1 className=" max-w-md mx-auto mt-8 p-4 text-4xl font-bold mb-4 text-center">Todo List</h1>
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-200 rounded shadow mb-4">
        <input
          type="text"
          className="flex-grow border p-2"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)} />
        <button
          className="ml-2 bg-green-500 text-white p-2 rounded"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>

    </div>
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-200 rounded shadow">
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center border p-2">
              {todo}
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>

            </li>
          ))}
        </ul>
      </div></>
    
  );
};

export default Todo;
