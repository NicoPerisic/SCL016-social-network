import { muro } from '../templates/templateMuro.js';
import { login } from '../templates/templateLogin.js';
import { register } from '../templates/templateRegister.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
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
