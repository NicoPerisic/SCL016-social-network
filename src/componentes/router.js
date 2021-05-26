import { muro } from '../templates/templatemuro.js';
import { login } from '../templates/templatelogin.js';
import { register } from '../templates/templateregister.js';
import { aboutUs } from '../templates/templateabout-us.js';
import { restablecimiento } from '../templates/templaterestablecimiento.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/login':
      containerRoot.appendChild(login());
      break;
    case '#/register':
      containerRoot.appendChild(register());
      break;
    case '#/restablecimiento':
      containerRoot.appendChild(restablecimiento());
      break;
    case '#/muro':
      containerRoot.appendChild(muro());
      break;
    case '#/nosotras':
      containerRoot.appendChild(aboutUs());
      break;
    default:
      containerRoot.innerHTML = 'ERROR';
      break;
  }
};

export const showRoute = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/register') {
    return showTemplate(hash);
  } if (hash === '#/restablecimiento') {
    return showTemplate(hash);
  } if (hash === '#/muro') {
    return showTemplate(hash);
  } if (hash === '#/nosotras') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener('hashchange', () => {
  showRoute(window.location.hash);
}, false);
