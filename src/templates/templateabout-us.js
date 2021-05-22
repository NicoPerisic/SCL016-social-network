import { footer } from '../componentes/footer.js';
import { nav } from '../componentes/nav.js';

export const aboutUs = () => {
  const divAboutContainer = document.createElement('div');
  const viewAbotUs = /* html */ `
  <div id="contenedorAboutUs">
  <img class="portada" src="images/logo.png" />
    <div id="textoAboutUs">Grupo de estudiantes de la generación SLC016 de Laboratoria, todas amantes del diseño y la programación. 
    Quisimos trabajar con una idea divertida y novedosa... Y
    BLA BLA BLA 
    LAS AMU uwu
     </div>
    <img class="nosotras" src="images/Tani.png" />
    <img class="nosotras" src="images/Nico.png" />
    <img class="nosotras" src="images/Eu.png" />
  `;

  divAboutContainer.innerHTML = viewAbotUs;
  divAboutContainer.appendChild(footer());
  divAboutContainer.appendChild(nav());

  return divAboutContainer;
};
