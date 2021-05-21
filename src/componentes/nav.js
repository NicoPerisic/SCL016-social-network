export const nav = () => {
  const viewNav = /* html */ `
    <div class="dropdown" style="float:right;"> 
    <button class="dropbtn"><img src="images/menu.png" class="iconMenu" alt="icono menú"></button>
    <nav class="dropdown-content"> 
      <ul class="linklist"> 
        <li class="enlace"><a href="#inicio">Inicio</a></li> 
        <li class="enlace"><a href="#perfil">Perfil</a></li> 
        <li class="enlace"><a href="#horoscopo">Horóscopo</a></li> 
        <li class="enlace"><a href="#nosotras">Nosotras</a></li> 
        <li class="enlace"><a href="#logout">Logout</a></li>
      </ul> 
    </nav> 
    </div>`;

  const divNav = document.createElement('div');
  divNav.innerHTML = viewNav;

  return divNav;
};
