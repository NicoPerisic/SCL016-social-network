import {showHomeHtmlElements} from '../templates/templatelogin.js';
import {showRegistroHtmlElements} from '../templates/templateregister.js';

//Templates de vistas - Función de Mostrar Rutas - Cada vista es una ruta ("Pintar")


  export const showRouter = (rout) => {
  
  if (rout == "#/login") { //Mostrar Login 
    showHomeHtmlElements() 

  }

  else if (rout == "#/register") { //Mostrar Registro
    showRegistroHtmlElements()

  }
}