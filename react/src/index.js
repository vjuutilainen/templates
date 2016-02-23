import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

window.onload = () => {
  ReactDOM.render(React.createElement(App), document.getElementById('app-container'));
};
