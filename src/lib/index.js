// Registro con correo
// Handler = controlador

const handlerRegister = (e) => {
  e.preventDefault();

  const signupEmail = document.getElementById('email').value;
  const signupPassword = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(() => {
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

export {
  authGoogle,
  handlerLogin,
  handlerRegister,
  handlerLogout,
};
