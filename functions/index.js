

 const admin = require('firebase-admin');
 const serviceAccount = require('./kelseys.json');
 
 // Initialize the Firebase Admin SDK with your service account credentials.
 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
 });
 
 // Set the custom claim for the user.
 const uid = 'Yg2xqUN7aag8oihzHAYUhoRG3in2'; // Replace with the user's UID.
 const customClaims = { admin: true };
 admin.auth().setCustomUserClaims(uid, customClaims)
   .then(() => {
     console.log('Custom claim added to user');
   })
   .catch((error) => {
     console.log(error);
   });