import React from 'react'
import '../styles/todoform.css'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter'){
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape'){
      props.handleClear()
    }
  }
  return(
    <div role='form' className='todoForm'>
    <input type="text" id='description' className='form-control'
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          placeholder='Adicione uma tarefa' value={props.description}/>
    <div className="buttons">
    <button onClick={props.handleAdd}>Adicionar</button>
    <button onClick={props.handleSearch}>Pesquisar</button>
    </div>
  </div>
  )
}
