import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filterTodo, setToggleEdit, setInputText, inputText, setIsEditItem }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {Object.values(filterTodo).map((todo, index) => (
          <Todo key={index} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} setToggleEdit={setToggleEdit} setInputText={setInputText} inputText={inputText} setIsEditItem={setIsEditItem} />
        ))}
      </ul>
    </div>
  )
}
