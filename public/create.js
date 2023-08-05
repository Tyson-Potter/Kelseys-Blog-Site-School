// Import necessary Firebase modules
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
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

// Attach event listener to signup form
let signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Firestore instance and Firebase auth
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  // Get user input values
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Successfully registered
    const user = userCredential.user;

    // Get user display name input
    const displayName = document.getElementById('signup-display').value;

    // Set user document in Firestore
    setDoc(doc(db, 'users', user.uid), {
      userId: user.uid,
      displayName: displayName
    });

    
    window.location.href = "/index.html";
  })
  .catch((error) => {
    // Error occurred during registration
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(`Error code: ${errorCode}, Error message: ${errorMessage}`);
  });
});

// Handle auth state changes
onAuthStateChanged(getAuth(firebaseApp), (user) => {
  if (user) {
    // User is logged in
    //
   // retrict to indexed.html
    window.location.href = "/index.html";

    // Hide 'create account' link
    var createAccountLink = document.querySelector('.mynav a[href="/create-account.html"]');
    if(createAccountLink) {
        createAccountLink.style.display = 'none';
    }

    console.log(`User is logged in with email: ${user.email}`);

    // Create logout button
    let logoutButton = document.createElement("button");
    logoutButton.innerHTML = "LOGOUT";
    logoutButton.id = "logout-button";
    document.body.appendChild(logoutButton);

    // Attach event listener to logout button
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

    // Show 'create account' link
    var createAccountLink = document.querySelector('.mynav a[href="/create-account.html"]');
    if(createAccountLink) {
        createAccountLink.style.display = 'inline-block';
    }

    console.log('User is logged out');

    // Create login button and append to navbar
    let navbar = document.getElementById('mynav-ul');
    let loginElement = document.createElement('li');
    let loginButton = document.createElement('button');
    loginButton.textContent = "LOGIN";
    loginButton.id = "login-button";
    loginElement.appendChild(loginButton);
    navbar.appendChild(loginElement);

    // Attach event listener to login button
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "/login.html";
    });
  }
});
