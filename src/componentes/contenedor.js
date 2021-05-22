// Contenedor Post

export const contenedorPost = () => {
  const divContenedorPost = document.createElement('div');
  divContenedorPost.classList.add('divContenedorPost');
  /* html */
  divContenedorPost.innerHTML = `
      <div class="contenedor"> </div>


    `;

  return contenedorPost;
};
