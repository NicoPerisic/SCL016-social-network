/* FUNCIÓN EDIT, se ejecuta dentro de Traer Datos

const editPost = (doc) => {
    const changePost = document.querySelectorAll('#textChange');
    changePost.innerHTML =  `
    <div id="editText">${doc.data().post}</div>
    <div id="btnsEdit btnCrud">
    <button id="btnSave">Guardar</button>
    <button id="btnCancel">Cancelar</button>
    </div>
    `;

    const edit = document.querySelectorAll('#post-placeholder');
    const save = document.querySelectorAll('#btnSave');
    const cancel = document.querySelectorAll('#btnCancel');

    cancel.addEventListener('click', () => {
      changePost.innerHTML = '';
    });

    save.onclick = () => {
      const postRef = db.collection('murogeneral').doc(id);
      return postRef.update({
        post: edit.value,
      })
        .then(() => {
          console.log('Editado >:)');
        })
        .catch((error) => {
          console.error('Error', error);
        });
    };
  };

  const btnEdit = document.querySelectorAll('#btnEdit');
  btnEdit.forEach((btnOne) => {
    btnOne.addEventListener('click', () => {
      console.log('Editado Correctamente');
      editPost(doc.id, doc.data().post);
        */
