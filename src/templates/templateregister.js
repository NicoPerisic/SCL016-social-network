import { handlerSignin } from '../lib/index.js';

// Segunda Página - Registro

export const showRegistroHtmlElements = () => {
  const img = document.createElement('img');
  img.classList.add('portada');
  img.src = 'images/logo.png';
  const contenedorElementos = document.getElementById('contenedorHome');
  contenedorElementos.appendChild(img);

  const divReg = document.createElement('div');
  divReg.classList.add('contenedorHome');
  contenedorElementos.appendChild(divReg);
  /* html */
  divReg.innerHTML = `
    <form id="formRegistro"> 
      <label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br> 
      <label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br> 
      <label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="password" id="password" class="inputRegistro" name="password"><br> 
      <label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="password" id="confpassword" class="inputRegistro" name="confirmpassword"><br> 
      <button type="submit" id="btnConfirmar">CONFIRMAR</button> 
      <button type="submit" id="btnCancelar">CANCELAR</button> 
      </form>
    `;

  const formRegistro = document.getElementById('formRegistro');
  formRegistro.addEventListener('submit', handlerSignin);
};
