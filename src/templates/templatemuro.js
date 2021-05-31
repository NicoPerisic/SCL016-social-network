import { nav } from '../componentes/nav.js';
import { footerMuro } from '../componentes/footerMuro.js';
import { handlerPost} from '../componentes/firebase-two.js';

export const muro = () => {
  const divMuroContainer = document.createElement('div');
  const viewMuro = /* html */ `
    <div id="contenedorMuro">
      <img class="portadaMuro" src="images/logo.png" />
      <div class="headerMuro">¡Bienvenidos a Aquelarre!</div>
        <form id="formMuro"> 
          <input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="post-placeholder" class="inputPost"><br>
          <div class="btnsMuro">
          <button type="submit" id="btnPublicar">Publicar</button>
          </div>
        </form>
        <div id="contenedorPost" class="scroll">
        <div id="post-container"></div>
        </div>
        <div class="centrarRedesOne">
    </div>`;

  divMuroContainer.innerHTML = viewMuro;

  divMuroContainer.appendChild(nav());
  divMuroContainer.appendChild(footerMuro());
  (handlerPost(divMuroContainer));

  return divMuroContainer;
};
