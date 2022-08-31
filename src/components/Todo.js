import { getTodo, deleteTodo } from '../services/todos-api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Todo() {
  const nav = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodo(id).then(res => {
      setTodo(res.data);
    });
  }, []);

  const deleteTheTodo = () => {
    deleteTodo(id).then(nav('/'));
  };

  return (
    <div>
      <h1>Todo:</h1>
      <h3>{todo.description}</h3>
      Completed: <input type='checkbox' checked={todo.complete} />
      <br />
      <button
        onClick={() => {
          nav(`/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheTodo}>Delete</button>
      <br />
      <Link to='/'>Go Back to Main</Link>
    </div>
  );
}

export default Todo;
