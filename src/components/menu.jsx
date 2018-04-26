import React from 'react'
import '../styles/menu.css'

export default props => (
  <section className="topo">
    <div className="logo">
    <h1>ToDoWes</h1>
    </div>
    <nav className="navegacao">
        <ul>
          <li><a href="#/todos">Tarefas</a></li>
          <li><a href="#/about">About</a></li>
        </ul>
      </nav>
  </section>

)
