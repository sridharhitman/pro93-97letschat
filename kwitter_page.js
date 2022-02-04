//YOUR FIREBASE LINKS

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

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
    
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
        message_wih_tag = "<h4 class='message_h4'>"+message + "</h4>";
        like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value ="+like +"onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyhicon glyhicon-thumbs-up'>Like:"+like+"</span></button><hr>";
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
        //End code
      } });  }); }
   getData();
//function to update like
function updateLike(message_id){
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database.ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
//Redirect To the kwitter room
function backToRoom(){
      window.location = "kwitter_room.html"
}
//logout button
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
    }
    
