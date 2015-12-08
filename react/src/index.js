import 'es5-shim';
import 'es5-shim/es5-sham';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

window.onload = () => {
  ReactDOM.render(React.createElement(App), document.getElementById('app'));
};
