import { muro } from '../templates/templatemuro.js';
import { login } from '../templates/templatelogin.js';
import { register } from '../templates/templateregister.js';
import { handlerLogin, handlerRegister } from '../lib/index.js';

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
    case '#/muro':
      containerRoot.appendChild(muro());
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
  } if (hash === '#/muro') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener('hashchange', () => {
  showRoute(window.location.hash);
}, false);

// Generar eventos de submit en elementos dinámicos en templates

document.addEventListener('click', (e) => {
  console.log(e);
  if (e.target && e.target.id === 'btnLogin') {
    return handlerLogin(e);
  }
  if (e.target && e.target.id === 'btnConfirmar') {
    return handlerRegister(e);
  }

  return null;
});
