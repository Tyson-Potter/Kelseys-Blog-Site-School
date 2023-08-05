<<<<<<< HEAD
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import {signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import {getFirestore, collection, getDocs, getDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';

import {getStorage, ref} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';
import {uploadBytesResumable} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';




// Your web app's Firebase configuration
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
    authDomain: "kelseys-blog.firebaseapp.com",
    projectId: "kelseys-blog",
    storageBucket: "kelseys-blog.appspot.com",
    messagingSenderId: "882433426371",
    appId: "1:882433426371:web:f050a491cfbbc15e347376"
});
let auth= getAuth(firebaseApp);
let user = auth.currentUser;s
onAuthStateChanged(auth, (user) => {
    auth.currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      if (idTokenResult.claims.admin) {
        let navbar = document.getElementById("mynav-ul");
   navbar .appendChild(document.createElement("li")).innerHTML = "<a href='admin.html'>ADMIN</a>";
   navbar .appendChild(document.createElement("li")).innerHTML = "<a href='postcreate.html'>ADMIN</a>";
        
      } else {
        window.location.href = "/index.html";
      }
    })
    .catch((error) => {
        window.location.href = "/index.html"
    });
  });

// Get a reference to the Firestore database
const db = getFirestore(firebaseApp);

// Wait for the window to load before attaching the event listener.
window.onload = function() {
    // Get a reference to the form element.
    var form = document.querySelector("form");

    // Attach an event listener to the form's submit event.
    form.onsubmit = function(e) {
        // Prevent the default form submission behavior.
        e.preventDefault();

        // Get the values of the form fields.
        var title = document.querySelector('input[name="title"]').value;
        var category = document.querySelector('input[name="Category"]').value;
        var content = document.querySelector('textarea[name="content"]').value;
        var image = document.querySelector('input[name="image"]').files[0];

        // Generate a unique ID for the post.
        var postId = doc(collection(db, "posts")).id;
        const storage = getStorage(firebaseApp);

        if (image) {
            // Create a reference to the location where the image will be stored
            var imageRef = ref(storage, "posts/" + postId + "/image.jpg");
            var uploadTask = uploadBytesResumable(imageRef, image);

            // Attach event listeners to the image upload task to handle success and failure.
            uploadTask.on("state_changed", function(snapshot) {
                // Handle progress updates here.
            }, function(error) {
                // Handle errors herecodepn.
                console.log("Error uploading image:", error);
            }, function() {
                // Handle successful uploads here.
                console.log("Image uploaded successfully");

                // Save the post data to Firestore.
                setDoc(doc(db, "posts", postId), {
                    title: title,
                    category: category,
                    content: content,
                    imageUrl: imageRef.fullPath
                }).then(function() {
                    // Handle successful post creation here.
                    console.log("Post saved successfully");
                }).catch(function(error) {
                    // Handle errors here.
                    console.log("Error saving post:", error);
                });
            });
        } else {
            // Save the post data to Firestore without an image.
            setDoc(doc(db, "posts", postId), {
                title: title,
                category: category,
                content: content
            }).then(function() {
                // Handle successful post creation here.
                console.log("Post saved successfully");
            }).catch(function(error) {
                // Handle errors here.
                console.log("Error saving post:", error);
            });
        }
    }
}
=======









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


// Wait for the window to load before attaching the event listener.
window.onload = function() {
    // Get a reference to the form element.
    var form = document.querySelector("form");

    // Attach an event listener to the form's submit event.
    form.onsubmit = function(e) {
        // Prevent the default form submission behavior.
        e.preventDefault();

        // Get the values of the form fields.
        var title = document.querySelector('input[name="title"]').value;
        var category = document.querySelector('input[name="category"]').value;
        var content = document.querySelector('textarea[name="content"]').value;
        var image = document.querySelector('input[name="image"]').files[0];

        // Generate a unique ID for the post.
        var postId = doc(collection(db, "posts")).id;
        const storage = getStorage(firebaseApp);

        if (image) {
            // Create a reference to the location where the image will be stored
            var imageRef = ref(storage, "posts/" + postId + "/image.jpg");
            var uploadTask = uploadBytesResumable(imageRef, image);

            // Attach event listeners to the image upload task to handle success and failure.
            uploadTask.on("state_changed", function(snapshot) {
                // Handle progress updates here.
            }, function(error) {
                // Handle errors herecodepn.
                console.log("Error uploading image:", error);
            }, function() {
                // Handle successful uploads here.
                console.log("Image uploaded successfully");

                // Save the post data to Firestore.
                setDoc(doc(db, "posts", postId), {
                    title: title,
                    category: category,
                    content: content,
                    imageUrl: imageRef.fullPath
                }).then(function() {
                    // Handle successful post creation here.
                    console.log("Post saved successfully");
                }).catch(function(error) {
                    // Handle errors here.
                    console.log("Error saving post:", error);
                });
            });
        } else {
            // Save the post data to Firestore without an image.
            setDoc(doc(db, "posts", postId), {
                title: title,
                category: category,
                content: content
            }).then(function() {
                // Handle successful post creation here.
                console.log("Post saved successfully");
            }).catch(function(error) {
                // Handle errors here.
                console.log("Error saving post:", error);
            });
        }
        form.reset();
    }
}
>>>>>>> 6524dade631204703f0a572bfb1da2ddbe97e7af
