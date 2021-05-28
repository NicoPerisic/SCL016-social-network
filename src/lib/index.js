// Registro con correo
// Handler = controlador

const handlerRegister = (e) => {
  e.preventDefault();

  const signupEmail = document.getElementById('email').value;
  const signupPassword = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then((data) => {
      console.log(data);
      alert('Registro Exitoso');
    }, (error) => {
      console.error(error);
      alert(`Error: ${error.message}`);
    });
};

// Login HOME

const handlerLogin = (e) => {
  e.preventDefault();

  const emailHome = document.getElementById('emailHome').value;
  const passwordHome = document.getElementById('passwordHome').value;
  firebase.auth().signInWithEmailAndPassword(emailHome, passwordHome)
    .then(() => {
      // Signed in
      window.location.href = '/#/muro';
    }, (error) => {
      console.error(error);
      alert(`Error: ${error.message}`);
    });
};

// Login Google

function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(providerGoogle)
    .then(() => {
      window.location.href = '/#/muro';
    }).catch(() => {
      alert('Intente nuevamente');
    });
}

// Logout

const handlerLogout = (e) => {
  e.preventDefault();
  firebase.auth().signOut()
    .then(() => {
      window.location.href = '/#/login';
    }).catch(() => {
      alert('Intente nuevamente');
    });
};

// Restablecimiento

const recoverPass = (e) => {
  e.preventDefault();

  const emailAddress = document.getElementById('emailRecover').value;

  firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(() => {
      alert('Correo enviado');
    }).catch(() => {
      alert('Intente nuevamente');
    });
};

// Observador

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    window.location.href = '/#/muro';
  } else {
    console.log('no existe');
    window.location.href = '/#/login';
  }
});

/* // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAoQ-nedl3yG6Cp0te7zAWxXkOg_1Z-HIU',
  authDomain: 'aquelarre-laboratoria.firebaseapp.com',
  projectId: 'aquelarre-laboratoria',
}); */

db.collection('users').add({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
})
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });

const addMessage = document.getElementById('pruebaCont');
addMessage.innerHTML = `
          <label for="post"></label><br><input placeholder="¿Qué nos contarás hoy ;)?" type="text" id="createPostTest" class="inputPost" name="post"><br> 
          <button type="submit" id="btnPublicarTest">Publicar</button>
          `;

const botonPublicar = document.getElementById('btnPublicarTest');
botonPublicar.addEventListener('click', () => {
  const comments = document.getElementById('createPostTest').value;
  db.collection('murogeneral').doc().set({
    comments,
    likes: 0,
  });
});

db.collection('murogeneral').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //    console.log(doc.id, ' => ', doc.data());
    const data = doc.data();
    data.id = doc.id;
    const addMsj = document.getElementById('pruebaContDos');
    addMsj.innerHTML += `
      <div class="inputPost">${data.comments}</div>
      <button type="button" id="edit" data-id="${data.id}">Editar</button>
      <button type="button" id="btnDelete" data-id="${data.id}">Eliminar</button>
  `;
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
  }); //*
}); //*

/* const crudFunction = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  console.log(data.id);
  const addMsj = document.getElementById('pruebaContDos');
  addMsj.innerHTML += `
  <input class="inputPost" data-id="${data.id}">
  <button type="submit">Editar</button>
  <button type="submit">Eliminar</button>
  `;
}; */

export {
  authGoogle,
  handlerLogin,
  handlerRegister,
  handlerLogout,
  recoverPass,
};
