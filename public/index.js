// // Import necessary Firebase modules
// import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
// import {signOut, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
// import {getFirestore, collection, getDocs, getDoc} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
// import {getStorage, ref} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';
// import {uploadBytesResumable} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';



import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import {signOut, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import {getFirestore, collection, getDocs, getDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';
import {getDownloadURL} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';

import {getStorage, ref} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';
import {uploadBytesResumable} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js';

// Initialize Firebase app
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBV9N0AzuVyaef8_nSHh2IaHnsESE9jGtI",
  authDomain: "kelseys-blog.firebaseapp.com",
  projectId: "kelseys-blog",
  storageBucket: "kelseys-blog.appspot.com",
  messagingSenderId: "882433426371",
  appId: "1:882433426371:web:f050a491cfbbc15e347376"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const postsRef = collection(db, "posts");

let user = auth.currentUser;
console.log("coentted");
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
          adminLink.href = "/admin.html";
          adminLink.textContent = "ADMIN";
          AdminLi.appendChild(adminLink);
          navbar.insertBefore(AdminLi, navbar.lastElementChild);

          //add post link to navbar if user is admin
          let postCreatorli = document.createElement("li");
          let postCreatorLink = document.createElement("a");
          postCreatorLink.href = "/postcreate.html";
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

// Initialize Firebase Auth and Firestore Database 

// Get a reference to the container element
const container = document.querySelector("#container");

// Define the gotoPost function


// Define the maximum number of words to display
const maxWords = 20;

// Retrieve all the posts
getDocs(postsRef)
  .then((querySnapshot) => {
    // Loop through the retrieved documents
    querySnapshot.forEach((doc) => {
      // Get the post data and ID
      const postData = doc.data();
      const postId = doc.id;

      // Create a new post element
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Create the image element
      const imageElement = document.createElement("img");
      // imageElement.classList.add("img-fluid");
      // imageElement.setAttribute("alt", "Responsive image");
     
// Get the image element by its ID or other selector


// Add the CSS class to the image
imageElement.classList.add('image-size-percentage');

      if (postData.imageUrl) {
        // If the post has an image, get a download URL for the image
        const storage = getStorage(firebaseApp);
        const imageRef = ref(storage, postData.imageUrl);
        getDownloadURL(imageRef)
          .then((url) => {
            // Set the src attribute of the image element to the download URL
            imageElement.setAttribute("src", url);
          })
          .catch((error) => {
            // Handle errors here
            console.log("Error getting download URL:", error);
          });
      }
      postElement.appendChild(imageElement);

      // Create the title element
      const titleElement = document.createElement("h3");
      titleElement.textContent = postData.title;
      titleElement.classList.add("title");
      postElement.appendChild(titleElement);

      // Create the category element
      const categoryElement = document.createElement("h5");
      categoryElement.textContent = postData.category;
      categoryElement.classList.add("category");
      postElement.appendChild(categoryElement);

      // Create the content element
      const contentWrapper = document.createElement("div");
      const contentElement = document.createElement("p");
      contentElement.textContent = truncateText(postData.content, maxWords);
      contentWrapper.appendChild(contentElement);
      postElement.appendChild(contentWrapper);
    // Define the gotoPost function
function gotoPost(postId) {
  onAuthStateChanged(auth, (user) => {
    if (user) { 
      window.location.href = "/posts.html?id=" + postId;
    }else {
      alert("You must be logged in to view posts");
    }
  });
  // Navigate to the posts.html page with the given ID
  
}

       // Create the read more button
       const readMoreButton = document.createElement("button");
       readMoreButton.classList.add("read-more", "btn", "btn-primary", "mt-2");
       readMoreButton.textContent = "READ MORE";
       readMoreButton.addEventListener("click", () => gotoPost(postId));
       postElement.appendChild(readMoreButton);

       // Append the post element to the container element
       container.appendChild(postElement);
    });
  })
  .catch((error) => {
    // Handle errors here
    console.log("Error getting posts:", error);
  });

// Truncate text to a maximum number of words and add an ellipsis if necessary

function truncateText(text, maxWords) {
  const words = text.split(/\s+/);
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "…";
  } else {
    return text;
  }
}









































