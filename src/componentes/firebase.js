// Funciones de Firestore

// BORRAR INFORMACIÓN DEL CONTAINER
const clean = () => {
  const addPost = document.getElementById('post-container');
  addPost.innerHTML = '';
};

// CREAR PUBLICACIÓN
const createPublication = () => {
  const formMuro = document.getElementById('formMuro'); // Formulario
  const post = formMuro.post.value; // Placerholder - Template Muro

  db.collection('murogeneral').doc().set({
    post,
    likes: 0,
    users,
  });
  clean();

  // TRAER DATOS
  db.collection('murogeneral').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;

      // HTML TEMPLATE - ADD POST
      const addPost = document.getElementById('post-container');
      addPost.innerHTML = /* html */ `
    <div class="inputPost">${data.post}</div>
    <button type="button" id="edit" data-id="${data.id}">Editar</button>
    <button type="button" id="btnD1elete" data-id="${data.id}">Eliminar</button>
    `;
    });
  });

  // DELETE POST
  const deleteAll = document.querySelectorAll('#btnDelete');
  for (let i = 0; i < deleteAll.length; i++) {
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
      const formMuro = document.getElementById('formMuro');
      formMuro.post.value = db.collection('murogeneral').doc((e.target.dataset.id)).delete();
    });
  }
};

// Controlador post muro
const handlerPost = () => {
  const btnPublicar = document.getElementById('btnPublicar');
  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    const formMuro = document.getElementById('formMuro');
    createPublication();
    formMuro.reset();
  });
  clean();
};

export default handlerPost;
