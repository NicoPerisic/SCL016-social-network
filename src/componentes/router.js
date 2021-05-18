import { showHomeHtmlElements } from '../templates/templatelogin.js';
import { showRegistroHtmlElements } from '../templates/templateregister.js';
import { showMuroHtmlElements } from '../templates/templatemuro.js';

// Templates de vistas - Función de Mostrar Rutas - Cada vista es una ruta ("Pintar")

export const showRoute = (hash) => {
  if (hash === '#/login') { // Mostrar Login
    return showHomeHtmlElements();
  }

  if (hash === '#/register') { // Mostrar Registro
    return showRegistroHtmlElements();
  }

  if (hash === '#/muro') { // Mostrar Muro
    return showMuroHtmlElements();
  }
  return showHomeHtmlElements();
};

/*
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('home');
  containerRoot.innerHTML =
} */
