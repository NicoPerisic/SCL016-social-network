import { footer } from '../componentes/footer.js';

export const login = () => {
  const viewLogin = /* html */ `
  <div id="contenedorLogin">
  <img class="portada" src="images/logo.png" />
    <form id="formLogin">
      <label for="email">Correo:</label><br><input placeholder="Ingresa tu correo" type="text" id="emailHome"
        class="inputHome" name="email"><br>
      <label for="password">Contraseña:</label><br><input placeholder="Ingresa tu contraseña" type="password"
        id="passwordHome" class="inputHome" name="password"><br>
      <button class="btnLogin" id="btnLogin">Login</button>
    </form>
    <div id="elementosGoogle">
      <div id="textoUno">¿No tienes cuenta? Registrate <a href="/#/register"><span id="aqui">aquí</span></a></div>
      <div id="textoDos"> O ingresa con tu cuerta de Google</div>
      <a class="fab fa-google fa-3x" id="google" onclick="authGoogle()"></a>
      <div id="textoTres">¿Olvidaste tu contraseña?, recuperala <a><span id="aquiTwo">aquí</span></a></div>
  </div>
</div>`;

  const divLoginContainer = document.createElement('div');
  divLoginContainer.innerHTML = viewLogin;
  divLoginContainer.appendChild(footer());

  return divLoginContainer;
};
