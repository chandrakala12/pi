
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCxzKyhC3ee-ae8VUmyYIfzxRpFMaF7Tak",
    authDomain: "kwitter-45f7e.firebaseapp.com",
    databaseURL: "https://kwitter-45f7e-default-rtdb.firebaseio.com",
    projectId: "kwitter-45f7e",
    storageBucket: "kwitter-45f7e.appspot.com",
    messagingSenderId: "39177965885",
    appId: "1:39177965885:web:578cefe49d30d0a4a6b554",
    measurementId: "G-9YBVX4VPH8"
  };
  firebase.initializeApp(firebaseConfig);

function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
});
}

