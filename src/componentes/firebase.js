// Funciones de Firestore

// BORRAR INFORMACIÓN DEL CONTAINER
const clean = (divMuroContainer) => {
  const addPost = divMuroContainer.querySelector('#post-container');
  addPost.innerHTML = '';
};

// CREAR PUBLICACIÓN
const createPublication = (divMuroContainer) => {
  // Envia la data a firebase
  const formMuro = divMuroContainer.querySelector('#formMuro'); // Formulario
  const post = formMuro.post.value; // Placerholder - Template Muro
  db.collection('murogeneral').doc().set({
    post,
    likes: 0,
  });
  clean(divMuroContainer);
};

const crudFunction = (doc) => {
  const data = doc.data();
  data.id = doc.id;

  // HTML TEMPLATE - ADD POST
  const addPost = document.getElementById('post-container');
  addPost.innerHTML = /* html */ `
  <div class="inputPost" id="postText" >${data.post}</div>
  <button type="button" class="btnCrud" id="edit" data-id="${data.id}">Editar</button>
  <button type="button" class="btnCrud" id="btnD1elete" data-id="${data.id}">Eliminar</button>
  <button type="submit" class="btnCrud" id="btnLike">Like</button> 
  `;

  // DELETE POST
  const deleteAll = document.querySelector('#btnDelete');

  for (let i = 0; i < deleteAll.lenght; i++) {
    const deleteSingle = deleteAll[i];
    deleteSingle.addEventListener('click', (e) => {
      db.collection('murogeneral').doc(e.target.dataset.id).delete().then(() => {
        console.log('Document successfully deleted!');
      })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
  }
  // EDIT POST
  const btnEdit = document.getElementById('edit');
  for (let i = 0; i < btnEdit.length; i++) {
    const btnSingle = btnEdit[i];
    btnSingle.addEventListener('click', (e) => {
      formMuro.post.value = db.collection('murogeneral').doc((e.target.dataset.id)).delete();
    });
  }
};

// TRAER DATOS
db.collection('murogeneral').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    crudFunction(doc);
  });
});

// Controlador post muro
export const handlerPost = (divMuroContainer) => {
  const btnPublicar = divMuroContainer.querySelector('#btnPublicar');
  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    const formMuro = divMuroContainer.querySelector('#formMuro');
    createPublication(divMuroContainer);
    formMuro.reset();
  });
  clean(divMuroContainer);
};
