import {showHomeHtmlElements} from '../templates/templatelogin.js';
import {showRegistroHtmlElements} from '../templates/templateregister.js';

//Templates de vistas - Función de Mostrar Rutas - Cada vista es una ruta ("Pintar")


  export const showRoute = (hash) => {
  
  if (hash == "#/") { //Mostrar Login 
    return showHomeHtmlElements()  
  }

  else if (hash == "#/register") { //Mostrar Registro
    return showRegistroHtmlElements()
  }

  else if (hash == "#/muro") { //Mostrar Muro
    return showMuroHtmlElements()
  }
}


/*
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('home');
  containerRoot.innerHTML = 
}*/