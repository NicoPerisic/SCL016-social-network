//Segunda Página - Registro

export const showRegistroHtmlElements = () => {

    let img = document.createElement('img');
    img.classList.add('portada');
    img.src = "images/logo.png";
    let contenedorElementos = document.getElementById('contenedorHome');
    contenedorElementos.appendChild(img);
  
    let divReg = document.createElement('div');
    divReg.classList.add('contenedorHome');
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
  