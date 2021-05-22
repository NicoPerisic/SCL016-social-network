import { nav } from '../componentes/nav.js';
import { footer } from '../componentes/footer.js';

export const register = () => {
  const viewRegister = /* html */ `
  <div class="dropdown" style="float:right;"> 
  <button class="dropbtn"><img src="images/menu.png" class="iconMenu" alt="icono menú"></button>
  <nav class="dropdown-content"> 
    <ul class="linklist"> 
      <li class="enlace"><a href="#inicio">Inicio</a></li> 
      <li class="enlace"><a href="#horoscopo">Horóscopo</a></li> 
      <li class="enlace"><a href="#nosotras">Nosotras</a></li> 
      <li class="enlace"><a href="#logout">Logout</a></li>
    </ul> 
  </nav> 
  </div>
  <div id="contenedorRegistro">
  <img class="portada" src="images/logo.png" />
    <form id="formRegistro"> 
      <label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br> 
      <label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br> 
      <label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="password" id="password" class="inputRegistro" name="password"><br> 
      <label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="password" id="confpassword" class="inputRegistro" name="confirmpassword"><br> 
      <button type="submit" id="btnConfirmar">CONFIRMAR</button> 
      <button type="submit" id="btnCancelar">CANCELAR</button> 
    </form>
  </div>`;


  const divRegisterContainer = document.createElement('div');
  divRegisterContainer.appendChild(nav());
  divRegisterContainer.innerHTML = viewRegister;
  divRegisterContainer.appendChild(footer());

  return divRegisterContainer;
};
