import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodo, setFilterTodo] = useState("")
  const [toggleEdit, setToggleEdit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null)

  useEffect(() => {
    filterHandle();
    saveLocal();
  }, []);


  const filterHandle = () => {
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  }

  useEffect(() => {
    filterHandle()
  }, [todos])

  const saveLocal = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.getItem("todos", JSON.stringify([]))
    } else {
      localStorage.getItem("todos", JSON.stringify(todos))
    }
  }

  const getLocal = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.getItem("todos", JSON.stringify([]))
    } else {
      localStorage.getItem("todos", JSON.stringify(todos))
    }
  }

  return (
    <div className="">
      <header>
        <h1>{inputText}</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
        status={status}
        toggleEdit={toggleEdit}
        isEditItem={isEditItem}
        setToggleEdit={setToggleEdit}
        setIsEditItem={setIsEditItem}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodo={filterTodo}
        setFilterTodo={setFilterTodo}
        setToggleEdit={setToggleEdit}
        setInputText={setInputText}
        inputText={inputText}
        setIsEditItem={setIsEditItem}
      />
    </div>
  );
}

export default App;
