<<<<<<< HEAD
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import {signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import {getFirestore, collection, getDocs, getDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';

import {getStorage, ref} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';
import {uploadBytesResumable} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';




// import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
// import {signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
// import {getFirestore, collection, getDocs, getDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';



// // Your web app's Firebase configuration
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
//     authDomain: "kelseys-blog.firebaseapp.com",
//     projectId: "kelseys-blog",
//     storageBucket: "kelseys-blog.appspot.com",
//     messagingSenderId: "882433426371",
//     appId: "1:882433426371:web:f050a491cfbbc15e347376"
//   });
  
// // Get a reference to the Firestore database
// // Get a reference to the Firestore database
// const db = getFirestore(firebaseApp);

// // Wait for the window to load before attaching the event listener.
// window.onload = function() {
//   // Get a reference to the form element.
//   var form = document.querySelector("form");

//   // Attach an event listener to the form's submit event.
//   form.onsubmit = function(e) {
//     // Prevent the default form submission behavior.
//     e.preventDefault();

//     // Get the values of the form fields.
//     var header = document.querySelector('input[name="header"]').value;
//     var category = document.querySelector('input[name="Category"]').value;
//     var content = document.querySelector('textarea[name="content"]').value;
//     var image = document.querySelector('input[name="image"]').files[0];

//     // Generate a unique ID for the post.
//     var postId = doc(collection(db, "posts")).id;

//     if (image) {
//       // Upload the image to Firebase Storage.
//       var storageRef = getStorage(firebaseApp).ref();
//       var imageRef = storageRef.child("posts/" + postId + "/image.jpg");
//       var uploadTask = imageRef.put(image);

//       // Attach event listeners to the image upload task to handle success and failure.
//       uploadTask.on("state_changed", function(snapshot) {
//         // Handle progress updates here.
//       }, function(error) {
//         // Handle errors here.
//         console.log("Error uploading image:", error);
//       }, function() {
//         // Handle successful uploads here.
//         console.log("Image uploaded successfully");

//         // Save the post data to Firestore.
//         setDoc(doc(db, "posts", postId), {
//           header: header,
//           category: category,
//           content: content,
//           imageUrl: imageRef.fullPath
//         }).then(function() {
//           // Handle successful post creation here.
//           console.log("Post saved successfully");
//         }).catch(function(error) {
//           // Handle errors here.
//           console.log("Error saving post:", error);
//         });
//       });
//     } else {
//       // Save the post data to Firestore without an image.
//       setDoc(doc(db, "posts", postId), {
//         header: header,
//         category: category,
//         content: content
//       }).then(function() {
//         // Handle successful post creation here.
//         console.log("Post saved successfully");
//       }).catch(function(error) {
//         // Handle errors here.
//         console.log("Error saving post:", error);
//       });
//     }
//   }
// }