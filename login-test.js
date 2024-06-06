 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; 



 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDlXOqpb1VY355wTzDHm4uzeQo97diiRA8",
   authDomain: "login-7178f.firebaseapp.com",
   projectId: "login-7178f",
   storageBucket: "login-7178f.appspot.com",
   messagingSenderId: "36844051944",
   appId: "1:36844051944:web:875df117f3c367b917585d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();



 //submit 
 const submit = document.getElementById('submit');
 submit.addEventListener("click", function(event){
  event.preventDefault();
 
 //input 
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Welcome to you!");
    //window.location.href = "trangchu.html"
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
 })

 //signIn with google
 const signInGG = document.getElementById('signInGG');
 signInGG.addEventListener("click",function(event){
  event.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert("Welcome to you!");
      //  window.location.href = "trangchu.html"
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
 })