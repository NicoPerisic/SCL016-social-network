// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';


/*Funcion desde Home a Pokedex General

let btnAqui = document.getElementById("aqui")
btnAqui.addEventListener("click", nextPageOne)

function nextPageOne() {
  document.getElementById("home").style.display = "none";
  document.getElementById("registro").style.display = "block";
}*/


//Primera Página - HOME 

const showHomeHtmlElements = () => {

   let img = document.createElement('img');
   img.classList.add('portada');
   img.src= "images/logo.png";
   let contenedorDiv = document.getElementById('contenedorHome');
   contenedorDiv.appendChild(img);

   let divInicio = document.createElement('div');
   divInicio.classList.add('elementosInicio');
   contenedorDiv.appendChild(divInicio);
   divInicio.innerHTML = 
   '<input class=inputHome>Correo</input>'+
   '<input class=inputHome>Correo</input>'+
   '<button class="btnLogin">Login</button>'

   let divOne = document.createElement('div');
   divOne.classList.add('elementosGoogle');
   contenedorDiv.appendChild(divOne);
   divOne.innerHTML = '<div id="textoUno">¿No tienes cuenta? Registrate <span id="aqui">aquí</span></div>' +
   '<div id="textoDos"> O ingresa con tu cuerta de Google</div>'+
   '<a class="fab fa-google fa-3x google" href=""></a>'

}

showHomeHtmlElements();


//Registro Página - HOME 

const showRegistroHtmlElements = () => {

   let img = document.createElement('img');
   img.classList.add('portada');
   img.src= "images/logo.png";
   let contenedorElementos = document.getElementById('contenedorRegistro');
   contenedorElementos.appendChild(img);

   let divReg = document.createElement('div');
   divReg.classList.add('elementosRegistro');
   contenedorElementos.appendChild(divReg);
   divReg.innerHTML = 
   '<input class=inputRegistro>Nombre</input>'+
   '<input class=inputRegistro>Email</input>'+
   '<input class=inputRegistro>Contraseña</input>'+
   '<input class=inputRegistro>Confirmar Contraseña</input>'+
   '<button class="btnConfirmar">CONFIRMAR</button>'

}

showRegistroHtmlElements();