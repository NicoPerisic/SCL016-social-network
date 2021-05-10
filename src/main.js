//Primera Página - HOME - LOGIN

const showHomeHtmlElements = () => {

  let img = document.createElement('img');
  img.classList.add('portada');
  img.src = "images/logo.png";
  let contenedorDiv = document.getElementById('contenedorHome');
  contenedorDiv.appendChild(img);

  let divInicio = document.createElement('div');
  divInicio.classList.add('contenedorHome');
  contenedorDiv.appendChild(divInicio);
  divInicio.innerHTML = '<form id= "formLogin">' +
    '<label for="email">Correo:</label><br><input placeholder="ingresa tu correo" type="text" id="emailHome" class="inputHome" name="email"><br>' +
    '<label for="password">Contraseña:</label><br><input placeholder="ingresa tu contraseña" type="text" id="passwordHome" class="inputHome" name="password"><br>' +
    '<button class="btnLogin">Login</button>' +
    '</form>'

  let divOne = document.createElement('div');
  divOne.classList.add('elementosGoogle');
  contenedorDiv.appendChild(divOne);
  divOne.innerHTML =
    '<div id="textoUno">¿No tienes cuenta? Registrate <a> <span id="aqui">aquí</span></a></div>' +
    '<div id="textoDos"> O ingresa con tu cuerta de Google</div>' +
    '<a class="fab fa-google fa-3x google" href=""></a>' +
    '<div id="textoTres">¿Olvidaste tu contraseña?, recuperala <a><span id="aquiTwo">aquí</span></a></div>'

  let divFooter = document.createElement('div');
  divFooter.classList.add('divFooter');
  contenedorDiv.appendChild(divFooter);
  divFooter.innerHTML =
    '<div class="centrarRedes">' +
    '<a class="fab fa-twitter-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
    '<a class="fab fa-facebook-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
    '<a class="fab fa-instagram-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a></div>' +
    '<div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.</div>'


}

showHomeHtmlElements();

//Segunda Página - Registro 

const showRegistroHtmlElements = () => {

  let img = document.createElement('img');
  img.classList.add('portada');
  img.src = "images/logo.png";
  let contenedorElementos = document.getElementById('contenedorRegistro');
  contenedorElementos.appendChild(img);

  let divReg = document.createElement('div');
  divReg.classList.add('contenedorRegistro');
  contenedorElementos.appendChild(divReg);
  divReg.innerHTML = '<form id="formRegistro">' +
    '<label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br>' +
    '<label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br>' +
    '<label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="password" id="password" class="inputRegistro" name="password"><br>' +
    '<label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="password" id="confpassword" class="inputRegistro" name="confirmpassword"><br>' +
    '<button type="submit" id="btnConfirmar">CONFIRMAR</button>' +
    '<button type="submit" id="btnCancelar">CANCELAR</button>' +
    '</form>'

  let divFooterTwo = document.createElement('div');
  divFooterTwo.classList.add('divFooterTwo');
  contenedorElementos.appendChild(divFooterTwo);
  divFooterTwo.innerHTML =
    '<div class="centrarRedes">' +
    '<a class="fab fa-twitter-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
    '<a class="fab fa-facebook-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
    '<a class="fab fa-instagram-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a></div>' +
    '<div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.</div>' +
    '</div>'
}

showRegistroHtmlElements();




//Desde HOME a REGISTRO 

let btnAqui = document.getElementById("aqui")
btnAqui.addEventListener("click", pageRegistro)

function pageRegistro() {
  document.getElementById("home").style.display = "none";
  document.getElementById("registro").style.display = "block";
}

//Desde REGISTRO a HOME

let btnCancelar = document.getElementById("btnCancelar")
btnCancelar.addEventListener("click", homeRegistro)

function homeRegistro() {
  document.getElementById("registro").style.display = "none";
  document.getElementById("home").style.display = "block";
}

