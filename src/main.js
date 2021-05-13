import {showRoute} from './componentes/router.js';


//Unico código por fuera - Se ejecuta al abrir la página

const init = () => {

  showRoute(window.location.hash) 

}

init() //Toda la lógica de inicialización
