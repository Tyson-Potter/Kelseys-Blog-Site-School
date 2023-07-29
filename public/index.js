// Import necessary Firebase modules
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {signOut, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import {getFirestore, collection, getDocs, getDoc} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

// Initialize Firebase app
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
  authDomain: "kelseys-blog.firebaseapp.com",
  projectId: "kelseys-blog",
  storageBucket: "kelseys-blog.appspot.com",
  messagingSenderId: "882433426371",
  appId: "1:882433426371:web:f050a491cfbbc15e347376"
});

// Initialize Firebase Auth and Firestore Database 
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Create reference to 'users' collection in Firestore
const users = collection(db, 'users');

// Handle Auth state changes (login/logout)
onAuthStateChanged(auth, (user) => {
  if (user) {


    auth.currentUser.getIdTokenResult()
  .then((idTokenResult) => {
    if (idTokenResult.claims.admin) {
      // User is an admin.
      console.log("User is an admin");
    } else {
      // User is not an admin.
      console.log("User is not an admin");
    }
  })
  .catch((error) => {
    console.log(error);
  });
    // User is logged in

    // Find 'create account' link and hide it
    var createAccountLink = document.querySelector('.mynav a[href="/create-account.html"]');
    if(createAccountLink) {
        createAccountLink.style.display = 'none'; // hide the create account link
    }

    // Log the email of the logged in user
    console.log(`User is logged in with email: ${user.email}`);

    // Create a logout button
    let logoutButton = document.createElement("button");
    logoutButton.innerHTML = "LOGOUT";
    logoutButton.id = "logout-button";

    // Add logout button to the document body
    document.body.appendChild(logoutButton);

    // Add an event listener to the logout button, 
    // so when it's clicked, the user is signed out and redirected to the index page
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      signOut(auth).then(() => {
        window.location.href = "/index.html";
      }).catch((error) => {
        console.log(error);
      });
    });
  } else {
    // User is logged out

    // Find 'create account' link and display it
    var createAccountLink = document.querySelector('.mynav a[href="/create-account.html"]');
    if(createAccountLink) {
        createAccountLink.style.display = 'inline-block'; // show the create account link
    }

    // Get navbar element and create a new login button
    let navbar = document.getElementById('mynav-ul');
    let loginElement = document.createElement('li');
    let loginButton = document.createElement('button');
    loginButton.textContent = "LOGIN";
    loginButton.id = "login-button";
    loginElement.appendChild(loginButton);
    navbar.appendChild(loginElement);

    // Add an event listener to the login button, 
    // so when it's clicked, the user is redirected to the login page
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
