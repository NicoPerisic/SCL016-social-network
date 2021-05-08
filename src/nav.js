//Primera Página - HOME - LOGIN

const showNavHtmlElements = () => {

   
    let divNav = document.createElement('nav');
    divNav.classList.add('divNav');
    contenedorDiv.appendChild(divNav);
    divNav.innerHTML ='<nav>'+
        '<ul>'+
            '<li><a href="">Inicio</a></li>'+
            '<li><a href="">Perfil</a></li>'+
            '<li><a href="">Horóscopo</a></li>'+
            '<li><a href="">About Us</a></li>'+
            '<li><a href="">Logout</a></li>'+
        '</ul>'+
    '</nav>'
      
  }
