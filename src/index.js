import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Task from './views/Task';

//enquanto não tiver navegação trocar Home por Task
ReactDOM.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>,
  document.getElementById('root')
);

