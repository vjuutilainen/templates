import 'es5-shim';
import 'es5-shim/es5-sham';
import yleFallback from './utils/yle-fallback';
import ylePath from './utils/yle-path.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const projectName = 'yle-project-react';

window.onload = () => {
  if($('html').hasClass('ie6') || $('html').hasClass('ie7') || $('html').hasClass('ie8')) yleFallback();
  else ReactDOM.render(React.createElement(App, { path: ylePath(projectName) }), document.getElementById('esi-vis'));
};
