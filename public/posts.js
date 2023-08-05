
        // Define your components
        var PostComponent = function(id, title, content, author) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.render = function() {
                return `
                    <div class="post">
                        <h2 class="post-title">${this.title}</h2>
                        <p class="post-content">${this.content}</p>
                        <p class="post-author">Posted by: ${this.author}</p>
                        <button class="reply-button active" id="reply-${this.id}">Reply</button>
                        <button class="cancel-button" id="cancel-${this.id}">Cancel</button>
                        <div class="arrow-div">
                            <textarea class="reply-textarea" id="textarea-${this.id}" placeholder="Write your reply..."></textarea>
                            <button class="arrow" id="arrow-${this.id}">
                                <img src="SendArrow.png" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                `;
            }
        }










const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
   
    if (user) {
      console.log(user);
    }else{
      console.log("no user");
    }
        });
     


function createSubReplyElement(subReply) {
  // Create the sub-reply element with a red border
  const subReplyElement = document.createElement("div");
  subReplyElement.style.border = "3px solid red"; // Red border
  subReplyElement.style.marginLeft = "15px"; // Smaller on the left
  subReplyElement.style.marginRight = "15px";
  subReplyElement.style.marginTop = "15px"; // Smaller on the right
  subReplyElement.classList.add("sub-reply"); // Class for styling sub-replies
  subReplyElement.style.overflow = "auto";
  subReplyElement.style.wordWrap = "break-word";
  const subReplyContent = document.createElement("span");
  subReplyContent.classList.add("sub-reply-content");
  subReplyContent.textContent = subReply.content;

  const subReplyAuthor = document.createElement("p");
  subReplyAuthor.classList.add("reply-author");
  const auth = getAuth();
const user = auth.currentUser;
  const username = user.email.split("@")[0];
 
  subReplyAuthor.textContent = `Reply by: ${username}`;

  const subReplyDate = document.createElement("p");
  // subReplyDate.classList.add('reply-date');

  subReplyDate.textContent = `${subReply.date}`;

  const subReplyDateTime = document.createElement("p");
  subReplyDateTime.classList.add("sub-reply-date-time");
  subReplyDateTime.textContent = `${new Date(subReply.time).toLocaleTimeString(
    [],
    { hour12: true, hour: "numeric", minute: "numeric" }
  )}`;

  subReplyElement.appendChild(subReplyAuthor);
  subReplyElement.appendChild(subReplyContent);

  subReplyElement.appendChild(subReplyDate);
  subReplyElement.appendChild(subReplyDateTime);

  return subReplyElement;
}

function createReplyElement(reply,username123) {

  const uniqueReplyId = reply.id;
  const replyButtonId = `reply-${uniqueReplyId}`;
  const textareaId = `textarea-${uniqueReplyId}`;
  const arrowId = `arrow-${uniqueReplyId}`;

  // Change border to red if it's a sub-reply

  const replyElement = document.createElement("div");
  replyElement.id = `${uniqueReplyId}`;
  replyElement.style.border = "3px solid grey";
  replyElement.style.border = "3px solid grey";
  replyElement.classList.add("reply");

  const replyContent = document.createElement("p");
  replyContent.classList.add("reply-content");
  replyContent.textContent = reply.content;
  const auth = getAuth();
  const user = auth.currentUser;
  const replyAuthor = document.createElement("p");
  replyAuthor.classList.add("reply-author");

  if(username123!=null){
    const username=username123
  }else{
    
  const username = user.email.split("@")[0];
  }
  replyAuthor.textContent = `Reply by: ${username}`;
  

  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button", "active");
  replyButton.textContent = "Reply";
  replyButton.id = replyButtonId;

  const arrowDiv = document.createElement("div");
  arrowDiv.classList.add("arrow-div");

  const textarea = document.createElement("textarea");
  textarea.classList.add("reply-textarea");
  textarea.id = textareaId;
  textarea.placeholder = "Write your reply...";
  textarea.style.display = "none";

  const arrowButton = document.createElement("button");
  arrowButton.classList.add("arrow");
  arrowButton.id = arrowId;

  const arrowImage = document.createElement("img");
  arrowImage.src = "SendArrow.png";
  arrowImage.alt = "Arrow";

  arrowButton.appendChild(arrowImage);
  arrowDiv.appendChild(textarea);
  arrowDiv.appendChild(arrowButton);
  replyElement.appendChild(replyContent);
  replyElement.appendChild(replyAuthor);
  replyElement.appendChild(replyButton);

  replyElement.appendChild(arrowDiv);

  // Add event listener to the reply button

  replyButton.addEventListener("click", function () {
    textarea.classList.toggle("open");
    arrowDiv.classList.toggle("open");
    replyButton.classList.toggle("active");

    arrowButton.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
    arrowImage.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
    textarea.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
  });

  arrowButton.addEventListener("click", function () {
    const parentReplyElement = replyElement.closest(".reply");
    // Extract the ID from the parent reply element
    const parentId = replyElement.id;
    var replyContent = document.getElementById("textarea-" + parentId).value;
    var textareaElement = document.getElementById("textarea-" + parentId);
    textareaElement.classList.remove("open");
    textareaElement.style.display = "none";

    console.log(replyContent + "replyContent");

    // If the reply content is empty, do nothing
    if (replyContent === "") {
      return;
    }

    // Create the new sub-reply object
    const date = new Date();
    const time = date.getTime();

 
 

    // Get a reference to the replies collection for the post
    // const repliesRef = collection(doc(db, "posts", id), "replies");
    // console.log("Replies reference:", repliesRef); // Debugging log
    const auth = getAuth();
    const user = auth.currentUser;


    
    const newSubReply = {
      content: replyContent,
      time: date.getTime(),
      date: new Date().toISOString().slice(0, 10),
      username: user.email.split("@")[0],
    };

    let subReplyElement = createSubReplyElement(newSubReply);
    subReplyElement.style.marginTop = "10px";
    // Get the parent reply element

    //gets send child of parent

    const childNodes = parentReplyElement.childNodes;
    const secondReplyElement = childNodes[1];

    if (secondReplyElement === null) {
      // If there is no first child element, simply append the new sub-reply element
      parentReplyElement.appendChild(subReplyElement);
    } else {
      // If there is a first child element, insert the new sub-reply element before it
      parentReplyElement.insertBefore(subReplyElement, secondReplyElement);
    }

    //Get a reference to the Firestore database
    const db = getFirestore(firebaseApp);

    console.log("parent id " + parentId + " " + parentReplyElement.id);

    // Reference the specific reply document by the extracted ID
    const replyRef = doc(db, "posts", id, "replies", parentId);

    // Get the document data
    getDoc(replyRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          // Extract the existing sub-replies array
          const subReplies = docSnap.data().subReplies || [];

          // Append the new sub-reply
          subReplies.push(newSubReply);

          // Update the document with the modified sub-replies array
          return setDoc(replyRef, { subReplies }, { merge: true });
        }
      })
      .then(() => {
        console.log("Sub-reply added successfully");
      })
      .catch((error) => {
        console.error("Error adding sub-reply: ", error);
      });

    // Clear the reply textarea and hide the reply form
    textarea.value = "";
    textarea.classList.remove("open");
    arrowDiv.classList.remove("open");
    arrowButton.style.display = "none";
    replyButton.classList.remove("active");
  });

  return replyElement;
}

// Get the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Get a reference to the Firestore database
const db = getFirestore(firebaseApp);

// Get a reference to the post container element
const postContainer = document.getElementById("postContainer");

// Get a reference to the document with the given ID
const postRef = doc(db, "posts", id);

// Get the document data
const docSnap = await getDoc(postRef);
// let replies = docSnap.data().replies;

// const repliesRef = collection(postRef, "replies");

// const repliesQuerySnapshot = await getDocs(repliesRef);
// const repliesData = repliesQuerySnapshot.docs.map((doc) => doc.data());

// Create a new sub-replies container

if (docSnap.exists()) {
  // Access the document fields
  const postData = docSnap.data();

  // Create the post title element
  const postTitle = document.createElement("h2");
  postTitle.textContent = postData.title;

  // Create the post content element
  const postContent = document.createElement("p");
  postContent.textContent = postData.content;

  // Create the post author element
  const postAuthor = document.createElement("p");
  postAuthor.textContent = `Posted by: Kelsey`;

  // Create the reply button element
  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button", "active");
  replyButton.textContent = "Reply";

  // Create the cancel button element

  // Create the arrow div element
  const arrowDiv = document.createElement("div");
  arrowDiv.classList.add("arrow-div");

  // Create the reply textarea element
  const replyTextarea = document.createElement("textarea");
  replyTextarea.classList.add("reply-textarea");
  replyTextarea.id = id + "-main-reply";
  replyTextarea.setAttribute("placeholder", "Write your reply...");
  arrowDiv.appendChild(replyTextarea);

  // Create the arrow button element
  const PostarrowButton = document.createElement("button");
  PostarrowButton.classList.add("arrow");
  arrowDiv.appendChild(PostarrowButton);

  // Create the arrow image element
  const arrowImage = document.createElement("img");
  arrowImage.setAttribute("src", "SendArrow.png");
  arrowImage.setAttribute("alt", "Arrow");
  PostarrowButton.appendChild(arrowImage);

  // Add the elements to the post container
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postContent);
  postContainer.appendChild(postAuthor);
  postContainer.appendChild(replyButton);

  postContainer.appendChild(arrowDiv);

  replyButton.addEventListener("click", function () {
    replyTextarea.classList.toggle("open");
    arrowDiv.classList.toggle("open");
    replyButton.classList.toggle("active");
    PostarrowButton.style.display = replyTextarea.classList.contains("open")
      ? "inline-block"
      : "none";
    arrowImage.style.display = replyTextarea.classList.contains("open")
      ? "inline-block"
      : "none";
  });

  const repliesRefeference = collection(db, "posts", id, "replies");
  let repliesContainer = document.getElementById("repliesContainer");
  getDocs(repliesRefeference)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const reply = doc.data();

        const replyElement = createReplyElement(reply);
        repliesContainer.appendChild(replyElement );

        reply.subReplies.forEach((SubReply) => {
          const subReplyElement = createSubReplyElement();
          replyElement.appendChild(subReplyElement);
        });

        // Create a new element for the reply

        // Get all sub-replies for the reply

        // Append the reply element to the page
        document.body.appendChild(repliesContainer);
      });
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });

  PostarrowButton.addEventListener("click", function () {
    console.log("Reply button clicked"); // Debugging log

    // Get the value of the reply textarea
    var replyContent = replyTextarea.value.trim();
    console.log("Reply content:", replyContent); // Debugging log

    // If the reply content is empty, do nothing
    if (replyContent === "") {
      console.log("Reply content is empty, exiting function"); // Debugging log
      return;
    }

    const db = getFirestore(firebaseApp);
    console.log("Database reference obtained:", db); // Debugging log

    // Get a reference to the replies collection for the post
    const repliesRef = collection(doc(db, "posts", id), "replies");
    console.log("Replies reference:", repliesRef); // Debugging log
    const auth = getAuth();
    const user = auth.currentUser;



    const newReply = {
      content: replyContent,
      time: new Date().getTime(),
      date: new Date().toISOString().slice(0, 10),
      username: user.email,
      id: new Date().getTime().toString(),
      subReplies: Array(),
    };

    console.log("New reply object:", newReply); // Debugging log

    // Add the new reply to the replies collection
    setDoc(doc(repliesRef, newReply.time.toString()), newReply)
      .then(function () {
        let repliesContainer = document.getElementById("repliesContainer");
        // Success
        const replyElement = createReplyElement(newReply);
        console.log("Reply element:", replyElement); // Debugging log

        // Get the parent reply element

        const firstReplyElement = repliesContainer.firstChild;

        // Check if there is a first child element
        if (firstReplyElement === null) {
          // If there is no first child element, simply append the new sub-reply element
          repliesContainer.appendChild(replyElement);
        } else {
          // If there is a first child element, insert the new sub-reply element before it
          repliesContainer.insertBefore(replyElement, firstReplyElement);
        }

        console.log("Reply added successfully");
      })
      .catch(function (error) {
        // Error
        console.error("Error adding reply: ", error);
      });

    // Clear the reply textarea and hide the reply form
    replyTextarea.value = "";
    replyTextarea.classList.remove("open");
    arrowDiv.classList.remove("open");
    PostarrowButton.style.display = "none";
    replyButton.classList.remove("active");

    console.log("Reply process completed"); // Debugging log
  });
} else {
}

function DisplayReplyElement(reply) {
  const replyButtonId = `reply-${reply.id}`;
  const textareaId = `textarea-${reply.id}`;
  const arrowId = `arrow-${reply.id}`;

  // Change border to red if it's a sub-reply

  const replyElement = document.createElement("div");
  replyElement.id = `${reply.id}`;
  replyElement.style.border = "3px solid grey";
  replyElement.style.border = "3px solid grey";
  replyElement.classList.add("reply");

  const replyContent = document.createElement("p");
  replyContent.classList.add("reply-content");
  replyContent.textContent = reply.content;

  const replyAuthor = document.createElement("p");
  replyAuthor.classList.add("reply-author");
  const username = user.email.split("@")[0];
  replyAuthor.textContent = `Reply by: ${username}`;

  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button", "active");
  replyButton.textContent = "Reply";
  replyButton.id = replyButtonId;

  const arrowDiv = document.createElement("div");
  arrowDiv.classList.add("arrow-div");

  const textarea = document.createElement("textarea");
  textarea.classList.add("reply-textarea");
  textarea.id = textareaId;
  textarea.placeholder = "Write your reply...";
  textarea.style.display = "none";

  const arrowButton = document.createElement("button");
  arrowButton.classList.add("arrow");
  arrowButton.id = arrowId;

  const arrowImage = document.createElement("img");
  arrowImage.src = "SendArrow.png";
  arrowImage.alt = "Arrow";

  arrowButton.appendChild(arrowImage);
  arrowDiv.appendChild(textarea);
  arrowDiv.appendChild(arrowButton);
  replyElement.appendChild(replyContent);
  replyElement.appendChild(replyAuthor);
  replyElement.appendChild(replyButton);

  replyElement.appendChild(arrowDiv);

  // Add event listener to the reply button

  replyButton.addEventListener("click", function () {
    textarea.classList.toggle("open");
    arrowDiv.classList.toggle("open");
    replyButton.classList.toggle("active");

    arrowButton.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
    arrowImage.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
    textarea.style.display = textarea.classList.contains("open")
      ? "inline-block"
      : "none";
  });
}

// Get a reference to the Firestore database

// Get all documents in the "replies" sub-collection for the post