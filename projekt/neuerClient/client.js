//Client starten
var faye = require('faye');
var http = require('http');
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//login Funktion
var path = require('path');
var connect = require('connect');
var server = http.createServer(app);

//HTML Render module
var ejs = require('ejs');
var fs = require('fs');

//Port muss ein anderer sein
var port = 3001;
 
//Adapter zum Server hinzuegen Verbindung der Clients 
var bayeux = new faye.NodeAdapter({
    mount: '/faye',
    timeout: 45 // angebe in Sekunden
});

bayeux.attach(server);
var client = new  faye.Client("http://localhost:3001/faye");
var subscription = client.subscribe('htmlSeite/login', function (message){  
    console.log("Geht doch"); 
});

// Aufruf loginseiten 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/loginFunk.html');
});
app.get('/praktikum', function (req, res) {
    res.sendFile(__dirname + '/praktikumsuebersicht.html');
});

//Aufruf Praktikauebersicht
app.get('./praktika', jsonParser, function (req, res){
    fs.readFile('./praktika.ejs', {encoding: 'utf-8'}, function (err, filestring){
        if (err) {
            throw err;
       } else {
          var option = {
            host: 'localhost',
            port: 3000,
            path: '/praktika/',
            method: 'GET',
    };  
        var externalRequest = http.request(option, function (externalRequest){
           console.log("Verbunden");
            externalRequest.on('data', function(chunk){
                var html = ejs.render(filestring);
                res.setHeader('content-type', 'text/html');
                res.writeHeader(200);
                res.writeHeader(html);
                res.end();
            });
        }); 
        externalRequest.end();
    }
    });
});
//Login Funktion für den überarbeite wersion 
/*function login() {
  var user = document.getElementById("user_id").value;
  var pass = document.getElementById("pass_id").value;

  var req = new XMLHttpRequest();
  req.open("POST", "", true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.withCredentials = true;
  req.onreadystatechange = function() {
    if (req.readyState == XMLHttpRequest.DONE) {
      if (req.status == 200) {        
        document.getElementById("log_form").style.display = 'none';
        document.getElementById("logged_user").style.display = 'block';
        document.getElementById("logged_user").textContent = document.getElementById("user_id").value;
        document.getElementById("logout_button").style.display = 'block';
        hide_error();
      } 
      else if (req.status == 401) {
        document.getElementById('error_text').textContent = "User/password is incorrect";
        document.getElementById('error').style.display="";
      }
    }
  }
  req.send(JSON.stringify({username: user, password: pass}));
}*/


//Aufruf Server
app.listen(port, function() {
    console.log('Der Client laeuft auf Port ' + port);
});