var faye        = require('faye');
var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var jsonParser  = bodyParser.json();

var ejs         = require('ejs');
var fs          = require('fs');
var PORT        = 8000;


//====================================================================================================================
//Server erstellen
var app         = express();
var server      = http.createServer(app);
                  app.use(bodyParser.json());

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - internal error');
});

//====================================================================================================================
//Adapter konfigurieren 
var bayeux = new faye.NodeAdapter({
    mount:'/faye'
});


//====================================================================================================================
//Seite aufrufen
app.set("view engine", "html");

app.get('./view/', function (require, response) {
        response.sendFile(path.join('/loginFunk.html')); 
         console.log("login aufrufen");
    });
app.get('./view/UserErstellen', function (require, response) {
    response.sendFile(path.join('/UserErstellen.html'));
    console.log("Erstellen Sie einen neuen User");
});
app.get('./view/auswahl', function (require, response) {
    response.sendFile(path.join('/auswahl.html'));
    //Auswahl zum Anmelden, Erstellen und Verwalten
});
app.get('./view/praktikaErtsellen', function (require, response) {
    response.sendFile(path.join('/praktikaErtsellen.html')); 
    //Der Professor erstellt ein Praktikum
});
app.get('./view/praktikumsViewProf', function (require, response) {
    response.sendFile(path.join('/praktikumsViewProf.html'));
    //Verwaltung für Professoren
});
app.get('/studentenAnmeldungPraktikika', function (require, response) {
    response.sendFile(path.join('/studentenAnmeldungPraktikika.html'));
    //Anmelden für Praktika
    });
app.get('/PraktikumViewStudent', function (require, response) {
    response.sendFile(path.join('/PraktikumViewStudent.html'));
    //Verwaltung für Studenten
});

//====================================================================================================================
//Adapter zum Server "User erstellen" hinzufügen

bayeux.attach(server);

var client = new faye.Client("http://localhost:8000/faye");

 var subscription = client.subscribe('/praktikaErtsellen', function(message){
    console.log("Neue Nachricht von " + JSON.stringify(message.creator));
     var options = {
        host: 'localhost',
        port: '3000',
        path: '/praktikaErtsellen',
        method: 'POST'
    }

    var externalRequest = http.request(options, function (externalResponse) {
        console.log('');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(message));
    externalRequest.end();
 });

var praktikumNeuErstellen = client.subscribe('/praktikaErtsellen', function (message) {
    console.log("Neuer Artikel von " + JSON.stringify(message.id));
    var options = {
        host: 'localhost',
        port: '3000',
        path: '/praktikaErtsellen',
        method: 'POST'
    };
    var externalRequest = http.request(options, function (externalResponse) {
        console.log('Praktikum erstellt');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(message));
    externalRequest.end();
});

//====================================================================================================================
//Post auf die Ressource Praktika


app.post('/praktikaErtsellen', function (req, res) {

    var publication = client.publish('/praktikaErtsellen', {
        "bewertung": req.body.bewertung
    });

    var newBewertung = JSON.stringify(req.body);
    console.log(newPraktikum);

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/praktikaErstellen',
        method: 'POST'
    };
    
     var externalRequest = http.request(options, function (externalResponse) {
        console.log('Bewertung erstellt');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
            user = JSON.parse(chunk);

            res.json(newBewertung);
            res.end();
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(req.body));
    externalRequest.end();
});


//====================================================================================================================
//Adapter zum Server "User erstellen" hinzufügen
bayeux.attach(server);

var client = new faye.Client("http://localhost:8000/faye");

 var subscription = client.subscribe('/praktikaErtsellen', function(message){
    console.log("Neue Nachricht von " + JSON.stringify(message.creator));
     var options = {
        host: 'localhost',
        port: '3000',
        path: '/praktikaErtsellen',
        method: 'POST'
    }

    var externalRequest = http.request(options, function (externalResponse) {
        console.log('');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(message));
    externalRequest.end();
 });



//=================================================================================
//Server Starten. 

server.listen(PORT, function() {
    console.log("Server listens on Port " + PORT);
});

