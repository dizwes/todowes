import React from 'react'
import '../styles/todoform.css'

export default props => (
  <div role='form' className='todoForm'>
    <input type="text" id='description' className='form-control'
          onChange={props.handleChange}
          placeholder='Adicione uma tarefa' value={props.description}/>
    <div className="buttons">
    <button onClick={props.handleAdd}>Adicionar</button></div>
  </div>
)
