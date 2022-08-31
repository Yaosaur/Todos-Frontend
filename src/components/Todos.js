import { getTodos } from '../services/todos-api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateTodo from './CreateTodo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then(res => {
      console.log(res.data);
      setTodos(res.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo._id}>
              <Link to={`/${todo._id}`}>{todo.description}</Link>
            </li>
          );
        })}
      </ul>
      <CreateTodo />
    </div>
  );
}
