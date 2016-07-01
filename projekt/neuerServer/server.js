var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var connect = require('connect');
var server = connect();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var faye = require('faye');
var port = 3000;

var student = [
    {name: "Deborah Gaeb", campusID: "dgaeb", passwort: "test", semester: 4, ap1: "BE", ap2: "BE",  bs: "BE", cga: "NB", db1: "BE", ktn: "BE",  mathe1: "BE", mathe2: "BE", st: "BE"},
    
    {name: "Jenny Müller", campusID: "jmueller", passwort: "test2", semester: 4, ap1: "BE", ap2: "NB",  bs: "NB", cga: "BE", db1: "BE", ktn: "NB",  mathe1: "BE", mathe2: "BE", st: "NB"},
    
    {name: "Susanne Meier", campusID: "smeier", passwort: "test3", semester: 2, ap1: "BE", ap2: "NB",  bs: "NB", cga: "NB", db1: "NB", ktn: "NB",  mathe1: "BE", mathe2: "NB", st: "NB"},
    
    {name: "Thomas Mueller", campusID: "tmueller", passwort: "test4", semester: 4, ap1: "BE", ap2: "BE",  bs: "BE", cga: "BE", db1: "BE", ktn: "BE",  mathe1: "BE", mathe2: "BE", st: "BE"},
    
    {name: "Sarah Brückner", campusID: "sbruekner", passwort: "test5",  semester: 2, ap1: "BE", ap2: "NB",  bs: "NB", cga: "NB", db1: "NB", ktn: "NB",  mathe1: "NB", mathe2: "NB", st: "NB"},
    
    {name: "Lukas Podolski", campusID: "lpodlski", passwort: "test6", semester: 6, ap1: "BE", ap2: "BE",  bs: "NB", cga: "NB", db1: "NB", ktn: "NB",  mathe1: "NB", mathe2: "BE", st: "NB"},
    
    {name: "Sandra Kopeczky", campusID: "skopevzky", passwort: "test7", semester: 6, ap1: "BE", ap2: "BE",  bs: "NB", cga: "NB", db1: "BE", ktn: "BE",  mathe1: "BE", mathe2: "BE", st: "BE"},
    
    {name: "Nicole Haas", campusID: "nhaas", passwort: "test8", semester: 2, ap1: "NB", ap2: "BE",  bs: "NB", cga: "NB", db1: "NB", ktn: "NB",  mathe1: "NB", mathe2: "NB", st: "NB"},
    
    {name: "Peter Hauasmann", campusID: "phausmann", passwort: "test9",  semester: 4, ap1: "BE", ap2: "BE",  bs: "BE", cga: "BE", db1: "BE", ktn: "NB",  mathe1: "BE", mathe2: "BE", st: "BE"}
];
var praktika = [
    {fach: "Algorilthmen und Programmieren 1", anzahlDerTermine: 8, laengeDerTermine: "45 Minuten", semester: "Wintersemester"},
    {fach: "Algorilthmen und Programmieren 2", anzahlDerTermine: 4, laengeDerTermine: "45 Minuten", semester: "Sommersemester"},
    {fach: "Betriebssystem", anzahlDerTermine: 6, laengeDerTermine: "2 Stunden", semester: "Sommersemester"},
    {fach: "Datenbank", anzahlDerTermine: 5, laengeDerTermine: "2 Stunden", semester: "Wintersemester"},
    {fach: "Kommunikation und Netze", anzahlDerTermine: 4, laengeDerTermine: "2,5 Stunden", semester: "Wintersemester"},
    {fach: "Mathematik 1", anzahlDerTermine: 4, laengeDerTermine: "45 Minuten", semester: "Wintersemester"},
    {fach: "Mathematik 2", anzahlDerTermine: 5, laengeDerTermine: "45 Minuten", semester: "Sommersemester"},
    {fach: "Softwaretechnik", anzahlDerTermine: 5, laengeDerTermine: "2 Stunden", semester: "Sommersemester"}
];
var dozent = [
    {name: "Prof. Dr. Frank Victor", fach: "AP 1", fach2: "BTA1"},
    {name: "Prof. Dr. Wolfgang Konen", fach: "Mathe 1", fach2: "Mathe 2"},
    {name: "Prof. Dr. Christian Kohls", fach: "AP 2", fach2: "Paradigmen der Programmierung"},
    {name: "Prof. Dr. Friedbert Jochum", fach: "ST 1", fach2: ""},
    {name: "Prof. Dr. Brigite Bertriesmeyer", fach: "DB 1", fach2: "DB 2"},
    {name: "Prof. Dr. Ludwig Stahl", fach: "KTN", fach2: ""},
    {name: "Prof. Dr. Martin Eisemann", fach: "CGA 1", fach2: ""},
    {name: "Prof. Dr. Mathias Boehmer", fach: "BS", fach2: ""}
];

/*app.post('/praktikum', jsonParser, function (req, res) {
    data.push(req.body);
    res.type('plain').send('Neuer Student hinzugefuegt');
    res.end();
});
*/

app.get('/praktika', function (req, res) {
        if (req.query.semester !== undefined) {
            res.jsonParser(praktika.filter (function (e, i, arr) {
            return e.semester == req.query.semester;
       }));
    } else {
        res.json(praktika);
    }
});


//Server mit dem Client-Server verbinden einen Clientseitigen 
var client = new faye.Client('http://localhost:3000/faye');

var publication = client.publish('/news', {
    'author': 'Deborah Gaeb',
    'content': '',
});
publication.then(     
    //Promise-Handler wenn eine Publishen erfolgen
    function () {
        res.writeHead(200, "OK");
        res.write("Nachricht wurde gesendet. ");
        res.end();
    });
     
        
app.listen(port, function () {
    console.log('Server laeuft auf Port ' + port);
});
