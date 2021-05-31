const db = firebase.firestore();

// CREAR PUBLICACIÓN

const createPublication = () => {
  const post = document.getElementById('post-placeholder').value;

  db.collection('murogeneral').add({
    post,
    likes: 0,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('post-placeholder').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const deleteMessage = (del) => {
  const deleteFirestore = (id) => db.collection('murogeneral').doc(id).delete();
  deleteFirestore(del);
};

const crudFunction = (doc) => {
  const data = doc.data();
  data.id = doc.id;

  // HTML TEMPLATE - ADD POST
  const addPost = document.getElementById('post-container');
  addPost.innerHTML += /* html */ `
    <div class="inputPost" id="postText" >${data.post}</div>
    <button type="button" class="btnCrud" id="edit" data-id="${data.id}">Editar</button>
    <button type="button" class="btnCrud" id="btnDelete" data-id="${data.id}">Eliminar</button>
    <button type="submit" class="btnCrud" id="btnLike" ${(doc.data().likes)}>Like</button> 
    `;

  const btnDelete = document.querySelectorAll('#btnDelete');
  for (let i = 0; i < btnDelete.length; i++) {
    const btnSingle = btnDelete[i];
    btnSingle.addEventListener('click', (e) => {
      console.log('Borrado Correctamente');
      deleteMessage(e.target.dataset.id);
    });
  }
};

// TRAER DATOS

db.collection('murogeneral').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    crudFunction(doc);
  });
});

/*
const btnEdit = document.querySelectorAll('#edit');
for (let i = 0; i < btnEdit.length; i++) {
  const editSingle = btnEdit[i];
  editSingle.addEventListener('click', (e) => {
    const postContainer = document.querySelector('#post-container');
    postContainer['post-placeholder'].value = db.collection('murogeneral').doc((e.target.dataset.id)).delete();
  });
} */

export const handlerPost = (divMuroContainer) => {
  const btnPublicar = divMuroContainer.querySelector('#btnPublicar');
  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    createPublication();
  });
};
