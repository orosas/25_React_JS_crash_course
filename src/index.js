import React from 'react';
import ReactDOM from 'react-dom';
// Nota: Se elimina css
// import './index.css';
import App from './App';

// Nota: Se elimina línea, ya que se utiliza para PWA's
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// Nota: Se elimina línea, ya que se utiliza para PWA's
// serviceWorker.unregister();
