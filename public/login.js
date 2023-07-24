// Import necessary Firebase modules
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
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

// Attach event listener to login button
let loginForm = document.querySelector('#login-button');
loginForm.addEventListener('click', (e) => {
  e.preventDefault();

  // Get Firebase auth and Firestore instances
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  // Get user input values
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User successfully logged in
    console.log("User logged in");
    window.location.href = "/index.html";

    // Get user data
    const user = userCredential.user;

    // Clear any previous failure messages
    document.getElementById('FailMessage').innerHTML = "";
  })
  .catch((error) => {
    // Login failed, display failure message
    document.getElementById('FailMessage').innerHTML = "Try again, wrong password or username";
  });
});

// Handle auth state changes
onAuthStateChanged(getAuth(firebaseApp), (user) => {
  if (user) {
    // User is logged in

    // Hide 'create account' link
    var createAccountLink = document.querySelector('.mynav a[href="/public/create-account.html"]');
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
      signOut(getAuth()).then(() => {
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
  }
});
