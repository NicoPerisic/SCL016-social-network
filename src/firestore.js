/* // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAoQ-nedl3yG6Cp0te7zAWxXkOg_1Z-HIU',
  authDomain: 'aquelarre-laboratoria.firebaseapp.com',
  projectId: 'aquelarre-laboratoria',
});

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

const botonPublicar = document.getElementById("btnPublicar");
botonPublicar.addEventListener('click', () => {
  const comentario = document.getElementById('createPost');
  db.collection('murogeneral').doc().set({
    comentario,
    likes: 0,
  });
})

*/
