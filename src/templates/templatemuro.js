import { header } from '../componentes/header.js';
import { nav } from '../componentes/nav.js';
import { footer } from '../componentes/footer.js';

export const showMuroHtmlElements = () => {
  const contenedorMuro = document.createElement('contenedorMuro');
  contenedorMuro.id = 'contenedorMuro';

  contenedorMuro.appendChild(header);
  contenedorMuro.appendChild(nav);
  contenedorMuro.appendChild(footer);

  return contenedorMuro;
};
