'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Origin', 'http://localhost:3000');
    fetch('http://localhost:8080/api/todos', { headers, mode: "cors" })
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos != null && todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
