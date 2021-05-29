import { nav } from '../componentes/nav.js';
import { footerMuro } from '../componentes/footerMuro.js';
import { handlerPost } from '../componentes/firebase.js';

export const muro = () => {
  const divMuroContainer = document.createElement('div');
  const viewMuro = /* html */ `
    <div id="contenedorMuro">
      <img class="portadaMuro" src="images/logo.png" />
      <div class="headerMuro">¡Bienvenidos a Aquelarre!</div>
      <div class="inviteMuro"></div>
        <form id="formMuro"> 
          <label for="post"></label><br><input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="post" class="inputPost" name="post"><br>
          <div class="btnsMuro">
          <button type="submit" id="btnPublicar">Publicar</button>
          </div>
        </form>
        <div id="post-container"></div>
        <div class="centrarRedesOne">
    </div>`;

  divMuroContainer.innerHTML = viewMuro;

  divMuroContainer.appendChild(nav());
  divMuroContainer.appendChild(footerMuro());
  (handlerPost(divMuroContainer));

  return divMuroContainer;
};
