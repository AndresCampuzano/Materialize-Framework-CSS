//  // Web app's Firebase configuration
//  var firebaseConfig = {
//     apiKey: "AIzaSyBOgVVvG7Nqa8TniDzh7qTaehzEgSK0N-A",
//     authDomain: "materialize-blog-41884.firebaseapp.com",
//     databaseURL: "https://materialize-blog-41884.firebaseio.com",
//     projectId: "materialize-blog-41884",
//     storageBucket: "materialize-blog-41884.appspot.com",
//     messagingSenderId: "1071187023919",
//     appId: "1:1071187023919:web:fa800c9e758a819c8cceda",
//     measurementId: "G-PZQFQ1PTWL"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   // firebase.analytics();
//   firebase.auth.Auth.Persistence.LOCAL;



//   $("#btn-login").click(function() {
//     var email = $('#email').val();
//     var password = $('#password').val();

//     if(email != "" && password != "") {
//       var result = firebase.auth().signInWithEmailAndPassword(email, password);

//       result.catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         console.log(errorCode);
//         console.log(errorMessage);
//         window.alert('Message: ' + errorMessage);
//       })
//     } else {
//       window.alert('Please fill out all fields');
//     }
//   });


function login() {
  var userEmail = document.getElementById('email_filed').value;
  var userPassword = document.getElementById('password_field').value;

  window.alert(userEmail + " " + userPassword);
}