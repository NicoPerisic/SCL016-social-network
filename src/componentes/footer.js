//Footer 

export const footer = () => {

let divFooterAll = document.createElement('div');
divFooterAll.classList.add('divFooterAll');
divFooterAll.innerHTML = /* html */ 
  `
    <div class="centrarRedes"> 
    <a class="fab fa-twitter-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a> 
    <a class="fab fa-facebook-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a> 
    <a class="fab fa-instagram-square fa-2x" href="https://www.youtube.com/watch?v=BtLSaxRnIhc"></a></div> 
    <div id="nombres">&copy;2021 Desarrollado por Tania Cariz, Nicole Perisić y Eunices Trujillo. Laboratoria SCL016.</div>
  `

  return footer; 
};