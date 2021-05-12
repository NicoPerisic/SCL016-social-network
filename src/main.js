import {showRouter} from './componentes/router.js';


//Unico código por fuera - Se ejecuta al abrir la página

const init = () => {

  showRouter(window.location.hash) 

}

init() //Toda la lógica de inicialización
