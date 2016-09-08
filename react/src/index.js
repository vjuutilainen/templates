import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

window.onload = () => {
  let container = document.getElementById('app-container');
  let app = React.createElement(App);
  ReactDOM.render(app, container);
};
