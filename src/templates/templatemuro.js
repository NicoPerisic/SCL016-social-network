import { footer } from '../componentes/footer.js';

export const muro = () => {
  const viewMuro = document.createElement('div');
  viewMuro.id = 'muro';
  viewMuro.appendChild(nav());

  const divMuro = document.createElement('div');
  const divMuroContainer = document.createElement('div');
  divMuro.innerHTML = viewMuro;
  divMuroContainer.appendChild(footer());

  return viewMuroContainer;
};
