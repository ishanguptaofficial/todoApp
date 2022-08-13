import React from 'react'

export default function Todo({ text, todos, setTodos, todo, setToggleEdit, setInputText, inputText, setIsEditItem }) {
    const deleteHandle = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandle = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }

    const editTodo = () => {
        let newEditItem = todos.find((item) => {
            return item.id === todo.id
        })
        console.log(newEditItem.text);
        setToggleEdit(false)

        setInputText(newEditItem.text);

        setIsEditItem(todo.id)

    }

    return (
        <div className='todo' >
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className='complete-btn' onClick={completeHandle}>
                <i className='fas fa-check'>
                </i>
            </button>
            <button className='trash-btn' onClick={deleteHandle}>
                <i className='fas fa-trash'>
                </i>
            </button>
            <button className='complete-btn' onClick={editTodo}>
                <i className='fas fa-edit'>
                </i>
            </button>
        </div>
    )
}
