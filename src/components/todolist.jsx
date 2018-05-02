import React from 'react'
import '../styles/todolist.css'

export default props =>{

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <div className="todoitem" key={todo._id}>
        <p className={todo.done ? 'markAsDone': ''}>{todo.description}</p>
        <div className="buttons-todo">
        <button className='sucess' title="Concluído, uffa menos uma!" onClick={() => props.handleMarkAsDone(todo)}></button>
        <button className='pending' title="Volta que deu ruim, Refazer!" onClick={() => props.handleMarkAsPending(todo)}></button>
        <button className='delete' title="Vamos limpar um pouco isso aqui, Excluír!!!" onClick={() => props.handleRemove(todo)}></button>
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
