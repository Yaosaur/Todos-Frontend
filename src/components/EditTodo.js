import { getTodo, editTodo } from '../services/todos-api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditTodo() {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getTodo(id).then(res => {
      setData(res.data);
    });
  }, []);

  const editTheTodo = e => {
    e.preventDefault();
    const updatedTodo = {
      description: e.target.description.value,
      complete: e.target.complete.checked,
    };
    editTodo(id, updatedTodo).then(nav(`/${id}`));
  };

  return (
    <div>
      <form onSubmit={editTheTodo}>
        <input type='text' name='description' defaultValue={data.description} />
        Complete:
        <input name='complete' type='checkbox' defaultChecked={data.complete} />
        <input type='submit' />
      </form>
    </div>
  );
}

export default EditTodo;
