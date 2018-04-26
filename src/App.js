import React from 'react';
import './App.css';

import Menu from './components/menu'
import Routes from './routes'

export default props => (
  <div className='app'>
    <Menu />
    <Routes />
  </div>
)
