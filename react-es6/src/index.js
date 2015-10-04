import 'es5-shim';
import 'es5-shim/es5-sham';
import React from 'react';
import App from './App.jsx';

window.onload = function() {
  React.render(React.createElement(App), document.getElementById('app'));
};
