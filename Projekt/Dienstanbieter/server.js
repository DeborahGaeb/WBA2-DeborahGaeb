/* Dieser Server ist von Deborah Gaeb geschrieben. 
Er ist fuer das Fach WBA2 erstellt wurden und in der Sprache 
Node.js geschrieben. In ihm befindet sich hauptsächlich die 
Datenstruktur*/

var http        = require('http');
var express     = require('express');
var bodyParser  = require('body-parser');
var jsonParser  = bodyParser.json();

var redis       = require('redis');
var client      = redis.createClient();
var app         = express();
var PORT        = 3000;
                  app.use(bodyParser.json());

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
//Datenbank einschalten
client.on('error', function (error) {
});
//====================================================================================================================
//user anlegen

app.post('/user', function (req, res) {
    var newUser = req.body;
    client.incr('nextUserID', function (err, rep) {
        nextUserID.id = rep;
        nextUserID.campusID = [];
        nextUserID.passwort = [];
        nextUserID.vorname = [];
        nextUserID.name = [];
        nextUserID.studiengang = [];
        nextUserID.status = [];
        client.set('user:' + newPraktikum.id, JSON.stringify(nextUserID), function (err, rep) {
            res.json(nextUserID);
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/user/:id', function (req, res) {
    client.keys('user*', function (err, rep) {

        var user = [];

        if (rep.length == 0) {
            res.json(praktika);
            return;
        }
        client.mget(rep, function (err, rep) {

            rep.forEach(function (val) {
                user.push(JSON.parse(val));
            });
            
            praktika = praktika.map(function (user) {
                return { id:                    user.id, 
                         campusID:              user.campusID, 
                         passwort:              user.passwort,
                         vorname:               user.vorname,
                         name:                  user.name,
                         studiengang:           user.studiengang, 
                         status:                user.status };
            });
            res.json(user);
        });
    });
});


//====================================================================================================================
//nach einem Bestimmten User suchen 

app.get('/user/:id', function (req, res) {

    client.get('user:' + req.params.id, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Das User mit der ID ' + req.params.id + ' existiert nicht');
        }
    });
});



//====================================================================================================================
//Praktikum anlegen
app.post('/praktikaErstellen', function (req, res) {
    var newPraktika = req.body;
    client.incr('nextPraktikumsID', function (err, rep) {
        newPraktika.id = rep;
        newPraktika.fach = [];
        newPraktika.studiengang = [];
        newPraktika.anzahlDerTermine = [];
        newPraktika.gesamtGruppengroesse = [];
        newPraktika.terminelaenge = [];
        newPraktika.gruppenarbeit = [];
        newPraktika.gruppenGroesse = [];
        client.set('praktikum:' + newPraktikum.id, JSON.stringify(newPraktikum), function (err, rep) {
            res.json(newPraktikum);
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/praktikaErstellen/:id', function (req, res) {
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
                return { id:                    praktika.id, 
                         fach:                  praktika.fach, 
                         studiengang:           praktika.studiengang, 
                         anzahlDerTermine:      praktika.anzahlDerTermine,
                         gesamtGruppengroesse:  praktika.gesamtGruppengroesse,
                         terminelaenge:         praktika.terminelaenge,
                         gruppenarbeit:         praktika.gruppenarbeit,
                         gruppenGroesse:        praktika.gruppenGroesse };
            });
            res.json(praktika);
        });
    });
});


//====================================================================================================================
//nach einem Bestimmten Praktikum anfragen

app.get('/praktikaErstellen/:id', function (req, res) {

    client.get('praktika' + req.params.id, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Das Praktika mit der ID ' + req.params.id + ' existiert nicht');
        }
    });
});


//====================================================================================================================
//Anmeldung für ein Praktikum

app.post('/anmeldungenPraktika', function (req, res) {
    var newAnmeldungPraktika = req.body;
    client.incr('nextUserID', function (err, rep) {
        newAnmeldungPraktika.id = rep;
        newAnmeldungPraktika.name = [];
        newAnmeldungPraktika.vorname = [];
        newAnmeldungPraktika.campusID = [];
        newAnmeldungPraktika.studiengang = [];
        newAnmeldungPraktika.fach1 = [];
        newAnmeldungPraktika.fach2 = [];
        newAnmeldungPraktika.fach3 = [];
        newAnmeldungPraktika.fach4 = [];
        client.set('newAnmeldungenPraktika:' + newPraktikum.id, JSON.stringify(newAnmeldungPraktika), function (err, rep) {
            res.json( newAnmeldungPraktika);
        });
    });
});


//====================================================================================================================
// Alle aufliesten

app.get('/anmeldungenPraktika/:id', function (req, res) {
    client.keys('anmeldungenPraktika*', function (err, rep) {

        var anmeldungPraktika = [];

        if (rep.length == 0) {
            res.json(praktika);
            return;
        }
        client.mget(rep, function (err, rep) {

            rep.forEach(function (val) {
                user.push(JSON.parse(val));
            });
            
            anmeldungPraktika = anmeldungPraktika.map(function (user) {
                return { id:                    anmeldungenPraktika.id, 
                         vorname:               anmeldungenPraktika.vorname,
                         name:                  anmeldungenPraktika.name,
                         campusID:              anmeldungenPraktika.campusID, 
                         studiengang:           anmeldungenPraktika.studiengang, 
                         fach1:                 anmeldungenPraktika.fach1,
                         fach2:                 anmeldungenPraktika.fach2,
                         fach3:                 anmeldungenPraktika.fach3,
                         fach4:                 anmeldungenPraktika.fach4 };
            });
            res.json(anmeldungPraktika);
        });
    });
});


//====================================================================================================================
//nach einem bestimmten Praktika suchen 

app.get('/anmeldungPraktika/:id', function (req, res) {

    client.get('anmeldungPraktika:' + req.params.id, function (err, rep) {
        if (rep) {
            res.type('json').send(rep);
        } else {
            res.status(404).type('text').send('Das Anmeldung mit der ID ' + req.params.id + ' existiert nicht');
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

app.get('/users/:id/praktika', function (req, res) {
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
                        //a = Anwesenheit 
                        //b = Bestanden oder nicht Bestanden
                        };
            });
            res.json(praktikumsuebersicht);
            
        });
    });
});

//======================================================================================================================
//Server starten 
app.listen (PORT, function () {
    console.log("Der Server laeuft auf Port" + PORT)
});