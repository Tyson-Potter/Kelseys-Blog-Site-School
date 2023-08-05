import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getDownloadURL } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

import {
  getStorage,
  ref,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
import { uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
  authDomain: "kelseys-blog.firebaseapp.com",
  projectId: "kelseys-blog",
  storageBucket: "kelseys-blog.appspot.com",
  messagingSenderId: "882433426371",
  appId: "1:882433426371:web:f050a491cfbbc15e347376",
});
console.log("firebaseApp");

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
let user = auth.currentUser;

// Handle Auth state changes (login/logout)

onAuthStateChanged(auth, (user) => {
  if (user) {
    auth.currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.admin) {
          let navbar = document.querySelector(".mynav ul");
          //add admin link to navbar if user is admin
          let AdminLi = document.createElement("li");
          let adminLink = document.createElement("a");
          adminLink.href = "admin.html";
          adminLink.textContent = "ADMIN";
          AdminLi.appendChild(adminLink);
          navbar.insertBefore(AdminLi, navbar.lastElementChild);

          //add post link to navbar if user is admin
          let postCreatorli = document.createElement("li");
          let postCreatorLink = document.createElement("a");
          postCreatorLink.href = "postcreate.html";
          postCreatorLink.textContent = "POST CREATOR";
          postCreatorli.appendChild(postCreatorLink);
          navbar.insertBefore(postCreatorli, navbar.lastElementChild);

          console.log("User is an admin");
          // User is an admin.
        } else {
          console.log("User is logged in but not an admin");
        }
        let logoutButton = document.createElement("button");
        logoutButton.innerHTML = "LOGOUT";
        logoutButton.id = "logout-button";

        // Add logout button to the document body
        document.body.appendChild(logoutButton);

        // Add an event listener to the logout button,
        // so when it's clicked, the user is signed out and redirected to the index page
        logoutButton.addEventListener("click", (e) => {
          e.preventDefault();
          signOut(auth)
            .then(() => {
              window.location.href = "/index.html";
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("User is not logged in");
    let navbar = document.querySelector(".mynav ul");
    let loginElement = document.createElement("li");
    let loginButton = document.createElement("button");
    loginButton.textContent = "LOGIN";
    loginButton.id = "login-button";
    loginElement.appendChild(loginButton);
    navbar.appendChild(loginElement);
    // Add an event listener to the login button,
    // so when it's clicked, the user is redirected to the login page
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
