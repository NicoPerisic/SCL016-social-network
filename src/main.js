// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

//Primera Página - HOME 

const showHomeHtmlElements = () => {

   let img = document.createElement('img');
   img.classList.add('portada');
   img.src= "images/logo.png"
   let contenedorDiv = document.getElementById('contenedorHome');
   contenedorDiv.appendChild(img);

   let nav = document.createElement('nav');
   nav.classList.add('centrar');
   contenedorDiv.appendChild(nav);

   let btnOne = document.createElement('button');
   btnOne.classList.add('botones');
   btnOne.textContent = 'Correo';
   nav.appendChild(btnOne);
 
   let btnTwo = document.createElement('button');
   btnTwo.classList.add('botones');
   btnTwo.textContent = 'Contraseña';
   nav.appendChild(btnTwo);
   
   let btnTree = document.createElement('button');
   btnTree.classList.add('botonLogin');
   btnTree.textContent = 'LOGIN';
   nav.appendChild(btnTree);

   let divOne = document.createElement('div');
   divOne.classList.add('elementosHome');
   contenedorDiv.appendChild(divOne);
   divOne.innerHTML = '<div id="textoUno">¿No tienes cuenta? Registrate <b>aquí</b></div>' +
   '<div id="textoDos"> O ingresa con tu cuerta de Google</div>'+
   '<a class="fab fa-google fa-3x google" href=""></a>'

}

showHomeHtmlElements();

/*let homeDiv = document.createElement('div');
homeDiv.classList.add('contenedorHome');
document.body.appendChild(homeDiv);*/
