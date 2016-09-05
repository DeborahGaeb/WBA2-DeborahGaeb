/* Dieser Server ist von Deborah Gaeb geschrieben. 
Er ist fuer das Fach WBA2 erstellt wurden. */
var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var jsonParser  = bodyParser.json();

var redis       = require('redis');
var client      = redis.createClient();
var app         = express();
var PORT        = 3000;
                  app.use(bodyParser.json());



//====================================================================================================================
//Datenbank einschalten
client.on('error', function (error) {
});


//====================================================================================================================
//Praktikum anlegen
app.post('/praktikaErstellen', function (req, res) {
    var newPraktikaErstellen = req.body;
    client.incr('nextPraktikumsID', function (err, rep) {
        newPraktikum.id = rep;
        newPraktikum.fach = [];
        newPraktikum.studiengang = [];
        newPraktikum.anzahlDerTermine = [];
        newPraktikum.gesamtGruppengroesse = [];
        newPraktikum.terminelaenge = [];
        newPraktikum.gruppenarbeit = [];
        newPraktikum.gruppenGroesse = [];
        client.set('praktikum:' + newPraktikum.id, JSON.stringify(newPraktikum), function (err, rep) {
            res.json(newPraktikum);
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/praktikaErstellen', function (req, res) {
    client.keys('Prakikum:*', function (err, rep) {

        var praktika = [];

        if (rep.length == 0) {
            res.json(praktika);
            return;
        }
        client.mget(rep, function (err, rep) {

            rep.forEach(function (val) {
                praktika.push(JSON.parse(val));
            });
            
            praktika = praktika.map(function (user) {
                return { id:                    praktikum.id, 
                         fach:                  praktikum.fach, 
                         studiengang:           praktikum.studiengang, 
                         anzahlDerTermine:      praktikum.anzahlDerTermine,
                         gesamtGruppengroesse:  praktikum.gesamtGruppengroesse,
                         terminelaenge:         praktikum.terminelaenge,
                         gruppenarbeit:         praktikum.gruppenarbeit,
                         gruppenGroesse:        praktikum.gruppenGroesse };
            });
            res.json(praktika);
        });
    });
});


//====================================================================================================================
//nach einem Bestimmten Praktikum anfragen

app.get('/praktika/:id', function (req, res) {

    client.get('praktika:' + req.params.id, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Das Praktika mit der ID ' + req.params.id + ' existiert nicht');
        }
    });
});


//====================================================================================================================
//eine praktiumsuebersich für das fach

app.post('/users/praktikumsuebersicht', function (req, res) {
    var newPraktikumsuebersicht = req.body;
    client.incr('nextUserID', function (err, rep) {
        newPraktikumsuebersicht.name        = [];
        newPraktikumsuebersicht.vorname     = [];
        newPraktikumsuebersicht.campusID    = [];
        newPraktikumsuebersicht.studiengang = [];
        newPraktikumsuebersicht.fach        = [];
        newPraktikumsuebersicht.raumNR      = [];
        newPraktikumsuebersicht.datumt1     = [];
        newPraktikumsuebersicht.termin1a    = [];
        newPraktikumsuebersicht.termin1b    = [];
        newPraktikumsuebersicht.datumt2     = [];
        newPraktikumsuebersicht.termin2a    = [];
        newPraktikumsuebersicht.termin2b    = [];
        newPraktikumsuebersicht.datumt3     = [];
        newPraktikumsuebersicht.termin3a    = [];
        newPraktikumsuebersicht.termin3b    = [];
        newPraktikumsuebersicht.datumt4     = [];
        newPraktikumsuebersicht.termin4a    = [];
        newPraktikumsuebersicht.termin4b    = [];
        newPraktikumsuebersicht.datumt5     = [];
        newPraktikumsuebersicht.termin5a    = [];
        newPraktikumsuebersicht.termin5b    = [];
        newPraktikumsuebersicht.datumt6     = [];
        newPraktikumsuebersicht.termin6a    = [];
        newPraktikumsuebersicht.termin6b    = [];
        newPraktikumsuebersicht.datumt7     = [];
        newPraktikumsuebersicht.termin7a    = [];
        newPraktikumsuebersicht.termin7b    = [];
        newPraktikumsuebersicht.datumt8     = [];
        newPraktikumsuebersicht.termin8a    = [];
        newPraktikumsuebersicht.termin8b    = [];
        client.set('user:' + newPraktikumsuebersicht.campusID, JSON.stringify(newPraktikumsuebersicht), function (err, rep) {
            res.json(newUser);
            
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/users', function (req, res) {
    client.keys('user:*', function (err, rep) {

        var praktikumsuebersicht = [];

        if (rep.length == 0) {
            res.json(users);
            return;
        }
        client.mget(rep, function (err, rep) {

            rep.forEach(function (val) {
                users.push(JSON.parse(val));
            });
            praktikumsuebersicht =   praktikumsuebersicht.map(function (praktikumsuebersicht) {
                return {campusID:    praktikumsuebersicht.campusID, 
                        name:        praktikumsuebersicht.name, 
                        vorname:     praktikumsuebersicht.vorname, 
                        studiengang: praktikumsuebersicht.studiengang,
                        fach:        praktikumsuebersicht.fach,
                        raumNR:      praktikumsuebersicht.raumNR,
                        Datum:       praktikumsuebersicht.datum1,
                        termin1a:    praktikumsuebersicht.termin1a,
                        termin1b:    praktikumsuebersicht.termin1b,
                        Datum:       praktikumsuebersicht.datum2,
                        termin2a:    praktikumsuebersicht.termin2a,
                        termin2b:    praktikumsuebersicht.termin2b,
                        Datum:       praktikumsuebersicht.datum3,
                        termin3a:    praktikumsuebersicht.termin3a,
                        termin3b:    praktikumsuebersicht.termin3b,
                        Datum:       praktikumsuebersicht.datum4,
                        termin4a:    praktikumsuebersicht.termin4a,
                        termin4b:    praktikumsuebersicht.termin4b,
                        Datum:       praktikumsuebersicht.datum5,
                        termin5a:    praktikumsuebersicht.termin5a,
                        termin5b:    praktikumsuebersicht.termin5b,
                        Datum:       praktikumsuebersicht.datum6,
                        termin6a:    praktikumsuebersicht.termin6a,
                        termin6b:    praktikumsuebersicht.termin6b,
                        Datum:       praktikumsuebersicht.datum7,
                        termin7a:    praktikumsuebersicht.termin7a,
                        termin7b:    praktikumsuebersicht.termin7b,
                        Datum:       praktikumsuebersicht.datum8,
                        termin8a:    praktikumsuebersicht.termin8a,
                        termin8b:    praktikumsuebersicht.termin8b,
                        //a = anwesenheit 
                        //b = bestanden 
                        };
            });
            res.json(users);
            
        });
    });
});

//====================================================================================================================
// Einen User abfragen
app.get('/users/:campusID', function (req, res) {

    client.get('user:' + req.params.campusID, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Der User mit der ID ' + req.params.id + ' existiert nicht');
        }
    });
});


//====================================================================================================================
//Praktikum anlegen
app.post('/praktikaErstellen', function (req, res) {
    var newPraktikaErstellen = req.body;
    client.incr('nextPraktikumsID', function (err, rep) {
        newPraktikum.id = rep;
        newPraktikum.fach = [];
        newPraktikum.studiengang = [];
        newPraktikum.anzahlDerTermine = [];
        newPraktikum.gesamtGruppengroesse = [];
        newPraktikum.terminelaenge = [];
        newPraktikum.gruppenarbeit = [];
        newPraktikum.gruppenGroesse = [];
        client.set('praktikum:' + newPraktikum.id, JSON.stringify(newPraktikum), function (err, rep) {
            res.json(newPraktikum);
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/praktikaErstellen', function (req, res) {
    client.keys('Prakikum:*', function (err, rep) {

        var praktika = [];

        if (rep.length == 0) {
            res.json(praktika);
            return;
        }
        client.mget(rep, function (err, rep) {

            rep.forEach(function (val) {
                praktika.push(JSON.parse(val));
            });
            
            praktika = praktika.map(function (user) {
                return { id:                    praktikum.id, 
                         fach:                  praktikum.fach, 
                         studiengang:           praktikum.studiengang, 
                         anzahlDerTermine:      praktikum.anzahlDerTermine,
                         gesamtGruppengroesse:  praktikum.gesamtGruppengroesse,
                         terminelaenge:         praktikum.terminelaenge,
                         gruppenarbeit:         praktikum.gruppenarbeit,
                         gruppenGroesse:        praktikum.gruppenGroesse };
            });
            res.json(praktika);
        });
    });
});


//====================================================================================================================
//nach einem Bestimmten Praktikum anfragen

app.get('/praktika/:id', function (req, res) {

    client.get('praktika:' + req.params.id, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Das Praktika mit der ID ' + req.params.id + ' existiert nicht');
        }
    });
});


//======================================================================================================================
//Server starten 
app.listen (PORT, function () {
    console.log("Der Server laeuft auf Port" + PORT)
});