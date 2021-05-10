//Tercera Página - Muro general 

const showMuroHtmlElements = () => {

    let img = document.createElement('img');
    img.classList.add('portadaMuro');
    img.src = "images/logo.png";
    let contenedorElementosMuro = document.getElementById('contenedorMuro');
    contenedorElementosMuro.appendChild(img);
  
  
    let divNav = document.createElement('nav');
    divNav.classList.add('divNav');
    let fondoMuro = document.getElementById('fondoMuro');
    fondoMuro.appendChild(divNav);
    divNav.innerHTML =
      '<div class="menu">' +
      '<a class="fas fa-list-alt fa-2x" href=""></a>' +
      '</div>' +
      '<nav>' +
      '<ul>' +
      '<li><a href="">Inicio</a></li>' +
      '<li><a href="">Perfil</a></li>' +
      '<li><a href="">Horóscopo</a></li>' +
      '<li><a href="">About Us</a></li>' +
      '<li><a href="">Logout</a></li>' +
      '</ul>' +
      '</nav>'
  
    let divFooterTree = document.createElement('div');
    divFooterTree.classList.add('divFooterTwo');
    contenedorElementosMuro.appendChild(divFooterTree);
    divFooterTree.innerHTML =
      '<div class="centrarRedesOne">' +
      '<a class="fab fa-twitter-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
      '<a class="fab fa-facebook-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a>' +
      '<a class="fab fa-instagram-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a></div>' +
      '<div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.</div>'
  }
  
  showMuroHtmlElements();
  