// Registro con correo
// Handler = controlador

const handlerSignin = (e) => {
  e.preventDefault();

  const signupEmail = document.getElementById('email').value;
  const signupPassword = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(() => {
      alert('Registrado');
    }).catch(() => {
      alert('Ocurrió un error inesperado');
    });
};

// Login HOME

const handlerLogin = (e) => {
  e.preventDefault();

  const emailHome = document.getElementById('emailHome').value;
  const passwordHome = document.getElementById('passwordHome').value;

  firebase.auth().signInWithEmailAndPassword(emailHome, passwordHome)
    .then(() => {
      window.location.href = '/#/muro';
    }).catch(() => {
      alert('Inténtalo nuevamente');
    });
};

function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(providerGoogle)
    .then(() => {
      window.location.href = '/#/muro';
    }).catch(() => {
      alert('Inténtalo nuevamente');
    });
}

export {
  authGoogle,
  handlerLogin,
  handlerSignin,
};
