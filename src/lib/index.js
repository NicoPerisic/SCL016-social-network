// Registro con correo
// Handler = controlador

const handlerRegister = (e) => {
  e.preventDefault();

  const signupName = document.getElementById('username').value;
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

export {
  authGoogle,
  handlerLogin,
  handlerRegister,
  handlerLogout,
  recoverPass,
};
