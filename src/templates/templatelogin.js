//Primera Página - HOME - LOGIN

export const showHomeHtmlElements = () => {

  let img = document.createElement('img');
  img.classList.add('portada');
  img.src = "images/logo.png";
  let contenedorDiv = document.getElementById('contenedorHome');
  contenedorDiv.appendChild(img);

  let divInicio = document.createElement('div');
  divInicio.classList.add('contenedorHome');
  contenedorDiv.appendChild(divInicio);
  divInicio.innerHTML = /* html */
    `
    <form id= "formLogin"> 
    <label for="email">Correo:</label><br><input placeholder="ingresa tu correo" type="text" id="emailHome" class="inputHome" name="email"><br> 
    <label for="password">Contraseña:</label><br><input placeholder="ingresa tu contraseña" type="text" id="passwordHome" class="inputHome" name="password"><br> 
    <button class="btnLogin">Login</button>
    </form>'
  `

  let divOne = document.createElement('div');
  divOne.classList.add('elementosGoogle');
  contenedorDiv.appendChild(divOne);
  divOne.innerHTML = /* html */
    `
    <div id="textoUno">¿No tienes cuenta? Registrate <a> <span id="aqui">aquí</span></a></div> 
    <div id="textoDos"> O ingresa con tu cuerta de Google</div> 
    <a class="fab fa-google fa-3x google" href=""></a> 
    <div id="textoTres">¿Olvidaste tu contraseña?, recuperala <a><span id="aquiTwo">aquí</span></a></div>
  `

  let divFooter = document.createElement('div');
  divFooter.classList.add('divFooter');
  divFooter.innerHTML = /* html */
    `
  <div class="centrarRedes"> 
  <a class="fab fa-twitter-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a> 
  <a class="fab fa-facebook-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a> 
  <a class="fab fa-instagram-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a></div> 
  <div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.</div>
`
}
