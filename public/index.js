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

// Initialize Firebase Auth and Firestore Database 
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const postsRef = collection(db, "posts");
// Get a reference to the container element
const container = document.querySelector("#container");

// Define the gotoPost function
function gotoPost(postId) {
  // Your code here
  console.log("Going to post:", postId);
}

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
      titleElement.textContent = postData.header;
      postElement.appendChild(titleElement);

      // Create the category element
      const categoryElement = document.createElement("h5");
      categoryElement.textContent = postData.category;
      postElement.appendChild(categoryElement);

      // Create the content element
      const contentWrapper = document.createElement("div");
      const contentElement = document.createElement("p");
      contentElement.textContent = truncateText(postData.content, maxWords);
      contentWrapper.appendChild(contentElement);
      postElement.appendChild(contentWrapper);
    // Define the gotoPost function
function gotoPost(postId) {
  // Navigate to the posts.html page with the given ID
  window.location.href = "/public/posts.html?id=" + postId;
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
// Get a reference to the Firestore database


// Get a reference to the posts collection


