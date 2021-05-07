
const formRegistro = document.getElementById("formRegistro");
const handleSignup = (e) =>{
  e.preventDefault();

const singupName = document.getElementById("username").value;
const singupEmail = document.getElementById("email").value;
const singupPassword = document.getElementById("password").value;
const singupConfPassword = document.getElementById("confpassword").value;

console.log(singupName,singupEmail, singupPassword, singupConfPassword)

auth
    .createUserWithEmailAndPassword(singupEmail,singupPassword)
    .then(userCredential => {
        console.log('jejejejeje')
    })
}

formRegistro.addEventListener('submit',handleSignup)



//Login HOME

const formLogin = document.getElementById("formLogin");
const handleLogin = (e) => {
  e.preventDefault();

  const emailHome = document.getElementById("emailHome").value;
  const passwordHome = document.getElementById("passwordHome").value;

  console.log(emailHome, passwordHome)

  auth
    .signInWithEmailAndPassword(emailHome,passwordHome)
    .then(userCredential => {
        console.log('A ver si funciona')
    })
}

formLogin.addEventListener('submit',handleLogin)



//Logout 

const outHome = document.getElementById("logout");
const logout= (e) => {
  e.preventDefault();
  
  auth.signOut().then(() => {
    console.log('chauuuu')
  })
}

logout.addEventListener('click', logout)