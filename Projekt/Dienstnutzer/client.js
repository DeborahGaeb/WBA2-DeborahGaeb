var faye        = require('faye');
var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var jsonParser  = bodyParser.json();

var ejs         = require('ejs');
var fs          = require('fs');
var PORT        = 8000;
 
var app = express();
var server = http.createServer(app);
app.use(bodyParser.json());

//======================================================================================
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/UserErstellen', function (req, res) {
    res.sendFile(__dirname + '/UserErstellen.html');
});

app.get('/auswahl', function (req, res) {
    res.sendFile(__dirname + '/auswahl.html');
});


app.get('/praktikaErtsellen', function (req, res) {
    res.sendFile(__dirname + '/praktikaErtsellen.html');
});

app.get('/PraktikumViewProf', function (req, res) {
    res.sendFile(__dirname + '/PraktikumViewProf.html');
});

app.get('/praktikumsViewStudenten', function (req, res) {
    res.sendFile(__dirname + '/praktikumsViewStudenten.html');
});

app.get('/anmeldenPraktika', function (req, res) {
    res.sendFile(__dirname + '/anmeldenPraktika.html');
});


//====================================================================================================================
//Adapter konfigurieren 
var bayeux = new faye.NodeAdapter({
    mount:'/faye'
});

//====================================================================================================================
//Adapter zum Server hinzufügen

bayeux.attach(server);

var client = new faye.Client("http://localhost:8000/faye");


//====================================================================================================================
//Post auf die Ressource userErstellen

app.post('/UserErstellen', function (req, res) {

var publication = client.publish('/UserErstellen', {
        "newUser": req.body.user
    });

    var newUser = JSON.stringify(req.body);
    console.log(newUser);

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/UserErstellen',
        method: 'POST'
    };
    
     var externalRequest = http.request(options, function (externalResponse) {
        console.log('Bewertung erstellt');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
            user = JSON.parse(chunk);

            res.json(newUser);
            res.end();
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(req.body));
    externalRequest.end();
});

//====================================================================================================================
//get auf die Ressource userErstellen

app.get('/users/:id', jsonParser, function (req, res) {

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/UserErstellen',
        method: 'GET'
    };

    var externalRequest = http.request(options, function (externalResponse) {
        console.log('Users nach Id');
        externalResponse.on('data', function (chunk) {

            var users = JSON.parse(chunk);


            res.json(users);
            res.end();
        });
    });

    externalRequest.setHeader("content-type", "text/plain");
    externalRequest.end();
});

//==================================================
//Praktika erstellen 

 var publication= client.subscribe('/praktikaErtsellen', function(message){
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


//====================================================================================================================
//get auf die Ressource praktikaErstellen

app.get('/praktikumErstellen/:id', jsonParser, function (req, res) {

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/praktikumErstellen/:id',
        method: 'GET'
    };

    var externalRequest = http.request(options, function (externalResponse) {
        console.log('Users nach Id');
        externalResponse.on('data', function (chunk) {

            var praktika = JSON.parse(chunk);


            res.json(praktika);
            res.end();
        });
    });

    externalRequest.setHeader("content-type", "text/plain");
    externalRequest.end();
});


//====================================================================================================================
//Post auf die Ressource anmeldenPraktik

app.post('/anmeldenPraktika.html"', function (req, res) {

    var anmeldenPraktika = client.publish('/anmeldenPraktika.html', {
        "anmeldenPraktika": req.body.user
    });

    var newUser = JSON.stringify(req.body);
    console.log(anmeldenPraktika);

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/anmeldenPraktika',
        method: 'POST'
    };
    
     var externalRequest = http.request(options, function (externalResponse) {
        console.log('Praktikum anmelden');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
            anmeldenPraktika.html = JSON.parse(chunk);

            res.json(anmeldenPraktika);
            res.end();
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(req.body));
    externalRequest.end();
});


//====================================================================================================================
//Post auf die Ressource anmeldenPraktik

app.post('/user/praktikumsuebersicht.html', function (req, res) {

    var praktukumsuebersicht = client.publish('//user/praktikumsuebersichtt.html', {
        "praktikumsuebersichtt": req.body.user
    });

    var newUser = JSON.stringify(req.body);
    console.log(anmeldenPraktika);

    var options = {
        host: 'localhost',
        port: '3000',
        path: '/user/praktikumsuebersicht',
        method: 'POST'
    };
    
     var externalRequest = http.request(options, function (externalResponse) {
        console.log('Praktikum anmelden');
        externalResponse.on("data", function (chunk) {
            console.log("body: " + chunk);
            praktikumsuebersicht = JSON.parse(chunk);

            res.json(praktikumsuebersicht);
            res.end();
        });
    });
    externalRequest.setHeader("content-type", "application/json");
    externalRequest.write(JSON.stringify(req.body));
    externalRequest.end();
});



//=================================================================================
//Server Starten. 

server.listen(PORT, function() {
    console.log("Server listens on Port " + PORT);
});

