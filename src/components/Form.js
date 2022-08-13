import React from 'react'

export default function Form({ setInputText, setTodos, todos, inputText, setStatus, toggleEdit, isEditItem, setToggleEdit, setIsEditItem }) {
  const inputHandle = (e) => {

    setInputText(e.target.value);
  }
  // const submitTodo = (e) => {
  //   e.preventDefault();
  //   setTodos([...todos, { text: inputText, completed: false, id: Math.random() }]);
  //   setInputText('');
  // }
  // else if (inputText && !toggleEdit) {
  //   console.log('inputtext toggleedit', inputText, toggleEdit)
  //   // setTodos(todos.map((todo) => {
  //   //   if (todo.id === isEditItem) {
  //   //     return { ...todos, text: inputText };
  //   //   }
  //   //   return todo;
  //   // }))
  //   /*todos.map((todo) => {
  //     if (todo.id === isEditItem) {
  //       return setTodos([...todo, { text: inputText }])
  //     }
  //   })*/
  //   // setToggleEdit(false);
  //   // setInputText('');
  //   // setIsEditItem(null);

  // } 

  const submitTodo = (e) => {
    if (!inputText) {
      alert('plzz fill data');
    } else if (inputText && !toggleEdit) {
      setTodos(todos.map((todo) => {
        if (todo.id === isEditItem) {
          return { ...todo, text: inputText, completed: false, id: todo.id };
        }
        return todo;
      })
      )
      setToggleEdit(false);
      setInputText('');
      setIsEditItem(null);
    } else {
      console.log('2')
      e.preventDefault()
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() }]);
      setInputText('');
    }
  }

  /*
    const editTodos = () => {
      if (inputText && !toggleEdit) {
        console.log('inputtext toggleedit', inputText, toggleEdit)
        setTodos(todos.map((todo) => {
          if (todo.id === isEditItem) {
            return { ...todos, text: inputText };
          }
        }))
        todos.map((todo) => {
          if (todo.id === isEditItem) {
            return setTodos([...todo, { text: inputText }])
          }
        })
        setToggleEdit(false);
        setInputText('');
        setIsEditItem(null);
      } else {
        console.log('none');
      }
    }
    const demo = () => {
      return console.log("data")
    }
    */
  const statusHandle = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputHandle} />
      {/* <button className="todo-button" type="submit">
        {toggleEdit ?
          <i className="fas fa-plus-square" onClick={submitTodo}></i>
          : <i className="fas fa-edit" onClick={demo}></i>
        }
      </button> */}
      {toggleEdit ?
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square" onClick={submitTodo}></i>
        </button>
        : <button className="todo-button" type="submit">
          <i className="fas fa-edit" onClick={submitTodo}></i>
        </button>}

      <div className="select" >
        <select name="todos" className="filter-todo" onClick={statusHandle}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
