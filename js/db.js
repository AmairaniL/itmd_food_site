  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAg1LD6B-Fnyks6PcFEhtmGg5WTGkeuEio",
    authDomain: "tosandqs.firebaseapp.com",
    databaseURL: "https://tosandqs.firebaseio.com",
    projectId: "tosandqs",
    storageBucket: "tosandqs.appspot.com",
    messagingSenderId: "73405332459",
    appId: "1:73405332459:web:28e8d7763fdbb0b4feb7ae",
    measurementId: "G-60ZFTMEFEC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //Form and Firebase connection
  var messagesRef = firebase.database().ref('tosandqs');
  
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

//http requests
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

app.get('/hello', (req, res) => {
  res.end("GET request!");  
});

if (request.method != "POST") {
     respond.status(400).send("404 Not Found");
}
app.post('/hello', (req, res) => {
  res.end("POST request!");  
});

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
