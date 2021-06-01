const db = firebase.firestore();

// CREAR PUBLICACIÓN

export const handlerPost = (post) => db.collection('murogeneral').add({
  post,
  likes: 0,
});

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

export const traerDatos = () => {
  db.collection('murogeneral').onSnapshot((querySnapshot) => {
    console.log(querySnapshot.docChanges().length);
    querySnapshot.forEach((doc) => {
      crudFunction(doc);
    });
  });
};
