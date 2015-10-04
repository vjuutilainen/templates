import 'es5-shim';
import 'es5-shim/es5-sham';
import App from './App.js';

window.onload = function() {
  new App().init();
};
