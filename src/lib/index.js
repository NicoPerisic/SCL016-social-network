// Login HOME

const handlerLogin = (e) => {
  e.preventDefault();

  const emailHome = document.getElementById('emailHome').value;
  const passwordHome = document.getElementById('passwordHome').value;

  console.log(emailHome, passwordHome);

  auth
    .signInWithEmailAndPassword(emailHome, passwordHome)
    .then((userCredential) => {
      console.log('A ver si funciona');
    });
};

// Registro con correo
// Handler = controlador

const handlerSignin = (e) => {
  e.preventDefault();

  const signupName = document.getElementById('username').value; // No se usa para registro
  const signupEmail = document.getElementById('email').value;
  const signupPassword = document.getElementById('password').value;
  const signupConfPassword = document.getElementById('confpassword').value; // No se usa, confirmar datos iguales

  console.log(signupName, signupEmail, signupPassword, signupConfPassword);

  auth
    .createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then((userCredential) => {
      console.log('Registrado');
    });
};

/* Logout

const outHome = document.getElementById("logout");
const logout = (e) => {
  e.preventDefault();

  auth.signOut().then(() => {
    console.log('chauuuu')
  })
}

logout.addEventListener('click', logout)

export {
  handlerSignin, handlerLogin,
};

*/

export {
  handlerLogin,
  handlerSignin,
};
