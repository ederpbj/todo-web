import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

//enquanto não tiver navegação trocar Home por Task
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

