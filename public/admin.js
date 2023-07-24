import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {deleteUser,signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import {getFirestore, collection, getDocs, getDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

// Initialize Firebase app
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
  authDomain: "kelseys-blog.firebaseapp.com",
  projectId: "kelseys-blog",
  storageBucket: "kelseys-blog.appspot.com",
  messagingSenderId: "882433426371",
  appId: "1:882433426371:web:f050a491cfbbc15e347376"
});
const auth=getAuth(firebaseApp);
onAuthStateChanged(getAuth(firebaseApp), (user) => {
    if (user) {

        firebaseApp.auth().currentUser.getIdTokenResult()
        .then((idTokenResult) => {
           if (!!idTokenResult.claims.admin) {

            
            console.log("User is a  admin")
            
           } else {
             console.log("User is not an admin")
           }
        })
        .catch((error) => {
          console.log(error);
        });






//verify admin is logged in














      // Create logout button
      let logoutButton = document.createElement("button");
      logoutButton.innerHTML = "LOGOUT";
      logoutButton.id = "logout-button";
      document.body.appendChild(logoutButton);
  
      // Attach event listener to logout button
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        signOut(getAuth()).then(() => {
          window.location.href = "/index.html";
        }).catch((error) => {
          console.log(error);
        });
      });
    } else {
        window.location.href = "/index.html";
      console.log('User is logged out');
    }
  });

 


