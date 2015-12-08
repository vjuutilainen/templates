import 'es5-shim';
import 'es5-shim/es5-sham';
import yleFallback from './utils/yle-fallback.js';
import ylePath from './utils/yle-path.js';
import App from './App.js';

const projectName = 'yle-project-basic';

window.onload = () => {
  if($('html').hasClass('ie6') || $('html').hasClass('ie7') || $('html').hasClass('ie8')) yleFallback();
  else new App(document.getElementById('esi-vis'), ylePath(projectName));
};
