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
  img.src = "images/logo.png";
  let contenedorDiv = document.getElementById('contenedorHome');
  contenedorDiv.appendChild(img);

  let divInicio = document.createElement('div');
  divInicio.classList.add('elementosInicio');
  contenedorDiv.appendChild(divInicio);
  divInicio.innerHTML =
    '<label for="email">Correo:</label><br><input placeholder="ingresa tu correo" type="text" id="emailHome" class="inputHome" name="email"><br>'+ 
    '<label for="password">Contraseña:</label><br><input placeholder="ingresa tu contraseña" type="text" id="passwordHome" class="inputHome" name="password"><br>'+ 
    '<button class="btnLogin">Login</button>'


  let divOne = document.createElement('div');
  divOne.classList.add('elementosGoogle');
  contenedorDiv.appendChild(divOne);
  divOne.innerHTML = 
  '<div id="textoUno">¿No tienes cuenta? Registrate <a> <span id="aqui">aquí</span></a> </div>' +
    '<div id="textoDos"> O ingresa con tu cuerta de Google</div>' +
    '<a class="fab fa-google fa-3x google" href=""></a>'
}

showHomeHtmlElements();


//Registro Página - HOME 

const showRegistroHtmlElements = () => {

  let img = document.createElement('img');
  img.classList.add('portada');
  img.src = "images/logo.png";
  let contenedorElementos = document.getElementById('contenedorRegistro');
  contenedorElementos.appendChild(img);



  let divReg = document.createElement('div');
  divReg.classList.add('contenedorRegistro');
  contenedorElementos.appendChild(divReg);
  divReg.innerHTML = '<form id="formRegistro">'+
    '<label for="username">Nombre:</label><br><input placeholder="ingresa tu nombre" type="text" id="username" class="inputRegistro" name="username"><br>'+ 
    '<label for="email">Email:</label><br><input placeholder="Ingresa un correo valido" type="text" id="email" class="inputRegistro" name="email"><br>'+ 
    '<label for="password">Contraseña:</label><br><input placeholder="Ingresa una contraseña" type="text" id="password" class="inputRegistro" name="password"><br>'+ 
    '<label for="confirmpassword"></label><br><input placeholder="Confirma tu contraseña" type="text" id="confpassword" class="inputRegistro" name="confirmpassword"><br>'+
    '<button type="submit" id="btnConfirmar">CONFIRMAR</button>'+
    '</form>'

}

showRegistroHtmlElements();

const formRegistro = document.getElementById(formRegistro);
const singupForm = (e) =>{
  e.preventDefault();

const singupName = document.getElementById(username).value;
const singupEmail = document.getElementById(email).value;
const singupPassword = document.getElementById(password).value;
const singupConfPassword = document.getElementById(confpassword).value;

console.log(singupName,singupEmail, singupPassword, singupConfPassword)
}

formRegistro.addEventListener('submit',singupForm)



let btnAqui = document.getElementById("aqui")
btnAqui.addEventListener("click", pageRegistro)

function pageRegistro() {
  document.getElementById("home").style.display = "none";
  document.getElementById("registro").style.display = "block";
}
  
