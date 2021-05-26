import { footer } from '../componentes/footer.js';

export const restablecimiento = () => {
  const viewRestablecimiento = /* html */ `
  <div id="contenedorRestablecimiento">
  <img class="portada" src="images/logo.png" />
    <form id="formRestablecimiento"> 
      <label for="emailRecuperacion">Ingresa tu correo aquí</label><br><input placeholder="Ingresa un correo valido" type="text" id="emailRecuperacion" class="inputRegistro" name="emailRecuperacion"><br> 
            <button type="submit" id="btnConfirmarRecuperacion">CONFIRMAR</button> 
      <a href="/#/login"><button type="button" id="btnCancelar">CANCELAR</button></a>
    </form>
  </div>`;

  const divRestablecimientoContainer = document.createElement('div');
  divRestablecimientoContainer.innerHTML = viewRestablecimiento;
  divRestablecimientoContainer.appendChild(footer());

  return divRestablecimientoContainer;
};
