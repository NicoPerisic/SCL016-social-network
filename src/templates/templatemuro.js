import { nav } from '../componentes/nav.js';
import { footer } from '../componentes/footer.js';

export const muro = () => {
  const divMuroContainer = document.createElement('div');

  const viewMuro = /* html */ `
    <div id="contenedorMuro">
      <img class="portadaMuro" src="images/logo.png" />
      <div class="headerMuro">¡Bienvenidos a Aquelarre!</div>
      <div class="inviteMuro"></div>
        <form id="formRegistro"> 
          <label for="post">Nombre:</label><br><input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="createPost" class="inputPost" name="post"><br> 
          <button type="submit" id="btnLike">Like</button> 
          <button type="submit" id="btnPublicar">Publicar</button> 
        </form>
        <div class="centrarRedesOne">
    </div>`;


  divMuroContainer.innerHTML = viewMuro;

  divMuroContainer.appendChild(nav());
  divMuroContainer.appendChild(footer());

  return divMuroContainer;
};
