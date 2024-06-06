 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; 
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


 //submit 
 const submit = document.getElementById('submit');
 submit.addEventListener("click", function(event){
  event.preventDefault();
 
 //input 
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...")
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
 })