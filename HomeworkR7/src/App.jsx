import { useState } from 'react';
import ModalWindow from './components/ModalWindow';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';

function App() {

  const[todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted;
      }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo =(text) => {
      const newTodo = {
        id: uuid(),
        title: text,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
  };

  return (
    <>
        <ModalWindow  addTodo={addTodo}/>
        <TodoList todos = {todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
