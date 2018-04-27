import React from 'react'
import '../styles/todolist.css'

export default props =>{

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div className="todoitem" key={todo._id}>
        <p className={todo.done ? 'markAsDone': ''}>{todo.description}</p>
        <div className="buttons-todo">
        <button className='sucess' title="Concluído, uffa menos uma!" hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}>✓</button>
        <button className='pending' title="Volta que deu ruim, Refazer!" hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}>⟲</button>
        <button className='delete' title="Vamos limpar um pouco isso aqui, Excluír!!!" hide={!todo.done} onClick={() => props.handleRemove(todo)}>X</button>
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
