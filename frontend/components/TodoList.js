import { useEffect, useState } from 'react';

export default function TodoList({ projectId }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('http://localhost:8080/api/todos', { headers, mode: "cors" })
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos != null && todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}