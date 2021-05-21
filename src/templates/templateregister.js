import { footer } from '../componentes/footer.js';

export const register = () => {
  const viewRegister = /* html */ `
  <div id="contenedorLogin">
  <img class="portada">
  <div id="divContenidoLogin">
    <form id="formLogin">
      <label for="email">Correo:</label><br><input placeholder="ingresa tu correo" type="text" id="emailHome"
        class="inputHome" name="email"><br>
      <label for="password">Contraseña:</label><br><input placeholder="ingresa tu contraseña" type="password"
        id="passwordHome" class="inputHome" name="password"><br>
      <button class="btnLogin">Login</button>
    </form>
    <div id="elementosGoogle">
      <div id="textoUno">¿No tienes cuenta? Registrate <a href="/#/register"><span id="aqui">aquí</span></a></div>
      <div id="textoDos"> O ingresa con tu cuerta de Google</div>
      <a class="fab fa-google fa-3x" id="google" onclick="authGoogle()"></a>
      <div id="textoTres">¿Olvidaste tu contraseña?, recuperala <a><span id="aquiTwo">aquí</span></a></div>
    </div>
  </div>
</div>`;

  const divLogin = document.createElement('div');
  const divLoginContainer = document.createElement('div');
  divLogin.innerHTML = viewRegister;
  divLoginContainer.appendChild(footer());

  return divLoginContainer;
};
