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


  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos != null && todos.map(todo => (
          <li key={todo.id} style={styles.card}>
            <input 
              type="checkbox" 
              checked={todo.completed || false}
              onChange={() => toggleComplete(todo.id)}
              style={styles.checkbox}
            />
            <span style={todo.completed ? styles.completedText : styles.text}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
    card: { 
      display: 'flex', alignItems: 'center', padding: '15px',
      background: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    checkbox: { marginRight: '10px' },
    completedText: { fontSize: '16px', textDecoration: 'line-through', color: '#888' }
  };