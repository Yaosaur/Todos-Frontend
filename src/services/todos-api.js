//Endpoint Routes
import axios from 'axios';

export async function getTodos() {
  const URL = 'https://todostodostodos.herokuapp.com/';
  const response = await axios.get(URL);
  return response;
}

export async function getTodo(id) {
  const URL = `https://todostodostodos.herokuapp.com/${id}`;
  const response = await axios.get(URL);
  return response;
}

export async function deleteTodo(id) {
  const URL = `https://todostodostodos.herokuapp.com/${id}`;
  return await axios.delete(URL);
}

export async function editTodo(id, updatedTodo) {
  const URL = `https://todostodostodos.herokuapp.com/${id}`;
  return await axios.put(URL, updatedTodo);
}

export async function createTodo(todo) {
  const URL = `https://todostodostodos.herokuapp.com/`;
  const response = await axios.post(URL, todo);
  return response;
}
