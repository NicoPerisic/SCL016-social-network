

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
    divNav.innerHTML = /* html */
    `
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
    `
    }
  
  showMuroHtmlElements();
  

  