var firebaseConfig = {
  apiKey: "AIzaSyA2Ur_5djhM03uLQ9vcj1b7FBYpF99SJ0Q",
  authDomain: "kwitter-dcf2a.firebaseapp.com",
  databaseURL: "https://kwitter-dcf2a-default-rtdb.firebaseio.com",
  projectId: "kwitter-dcf2a",
  storageBucket: "kwitter-dcf2a.appspot.com",
  messagingSenderId: "68296065656",
  appId: "1:68296065656:web:595fe63f43f619ff37a38d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


username = localStorage.getItem("userName");
document.getElementById("user_name").innerHTML = "Welcome : " + username + "!";
console.log(username);
function addRoom() {
  roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
      purpose : "adding room name"
    });
  localStorage.setItem("roomName", roomName);
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("roomName", name);
window.location = "kwitter_page.html";
}
//Logout button
function logout() {
  localStorage.removeItem("userName");
  window.location = "index.html";
}

