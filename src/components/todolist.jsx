import React from 'react'
import '../styles/todolist.css'

export default props =>{

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div className="todoitem" key={todo._id}>
        <p className={todo.done ? 'markAsDone': ''}>{todo.description}</p>
        <div className="buttons-todo">
        <button className='sucess' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}>✓</button>
        <button className='pending' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}>⟲</button>
        <button className='delete' hide={!todo.done} onClick={() => props.handleRemove(todo)}>X</button>
        </div>
      </div>
    ))
  }
 return(
   <div className="todolist">
    {renderRows()}
   </div>


 )
}
