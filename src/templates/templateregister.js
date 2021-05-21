import { footer } from '../componentes/footer.js';

export const register = () => {
  const viewRegister = /* html */ `
  <div id="contenedorLogin">
  <img class="portada">
  <div id="divContenidoLogin">
  <form id="formRegistro"> 
  <label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br> 
  <label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br> 
  <label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="password" id="password" class="inputRegistro" name="password"><br> 
  <label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="password" id="confpassword" class="inputRegistro" name="confirmpassword"><br> 
  <button type="submit" id="btnConfirmar">CONFIRMAR</button> 
  <button type="submit" id="btnCancelar">CANCELAR</button> 
  </form>
  </div>
  </div>`;

  const divLogin = document.createElement('div');
  const divLoginContainer = document.createElement('div');
  divLogin.innerHTML = viewRegister;
  divLoginContainer.appendChild(footer());

  return divLoginContainer;
};
