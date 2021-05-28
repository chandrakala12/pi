
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
    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
});

   localStorage.setItem("room_name" , room_name);
 
   window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}