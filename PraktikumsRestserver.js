'use strict';
var express = require("express");
var app = express();
var bodyparser = require("body-parser");


var servePort = 3000; 

var faecher[
    {fachname: "Mathematik 2", praktikum: true}
    {fachname: "Algorithmen und Programmieren 2", praktikum: true}
    {fachname: "Grundlagen der visuellen Kommuikation", praktikum: false}
    {fachname: "Audiovisuelles Medienprojekt", praktikum: true}
    {fachname: "Medienproduktion und Technik", praktikum: false}
    {fachname: "Theoretische Informatik", praktikum: false}
    {fachname: "Webbasierte Anwendungen 2", praktikum: false}
    {fachname: "Softwaretechnik 1", praktikum: true}
    {fachname: "Mensch Computer Interaktion", praktikum: false}
    {fachname: "Betriebswirtschaftslehre 2", praktikum: false}
    {fachname: "Betriebssysteme", praktikum: true}
    {fachname: "Wahlpflichtfach 1", praktikum: false}
];

var studenten[
    {nameDesStudent: "Deborah Gäb", semester: 4, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Hannah Heiter", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Susi Sonnenschein", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Ginny Weasley", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Hermine Granger", semester: 4, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Luna Lovegood", semester: 4, studeniengang: "Medieninformatik"}
];

var studentInSTPraktikum[
    {nameDesStudent: "Deborah Gäb", bestanden: false}
    {nameDesStudent: "Hannah Heiter", bestanden:false }
    {nameDesStudent: "Susi Sonnenschein", bestanden: false}
    {nameDesStudent: "Ginny Weasley", bestanden: false}
    {nameDesStudent: "Hermine Granger", bestanden: false}
    {nameDesStudent: "Luna Lovegood", bestanden: false}
    
];

app.get('\fachMitPraktikum', function(req, res){
    if(req.query.praktikum !== undefined){
        res.json(faecher.filter(function(e, i, arr){
            return e.faecher == req.query.praktikum.
        }));
    }
    else{
        res.json(faecher);
    }

   app.get('\studenten', function(req, res){
    if(req.query.semester !== undefined){
        res.json(faecher.filter(function(e, i, arr){
            return e.student == req.query.semester
        }));
    }
    else{
        res.json(faecher);
    }
    app.post("/praktikumBestanden",function(req, res, next)
            if(req.query.semester !== undefined){
                res.json(studentInSTPraktikum.change(function(true){
                    return e.bestanden == true
                }));
            }
             
)
    //Eroeffnung der Redisdatenbank
var redis = require('redis');
var client = redis.createClient(port, 'hostname', {no_ready_check: true});
client.auth('password', function (err) {
    if (err) then throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
    // Schreiben der Datenbank

client.set("Name", "Matrikelnummer", "Termin1", "Termin2", "Termin3", "Termin4", "Termin5", "Termin6", "Test",redis.print);
client.hset("Romina Regenbogen", 11102844,"BE", "BE", "BE", "", "", "", "NB", redis.print);
client.hset("Deborah Gaeb", 11102884,"BE", "BE", "BE", "", "", "", "BE", redis.print);
client.hset("Susi Sonnenschein", 11102771,"BE", "BE", "BE", "", "", "", "BE", redis.print);
client.hset("Hermine Granger", 11102134,"BE", "BE", "BE", "BE", "", "", "BE", redis.print);
client.hset("Ginny Weasly", 11100104,"BE", "BE", "BE", "", "", "", "BE", redis.print);
    client.hset("Luna Loovgood", 11107142,"BE", "BE", "BE", "BE", "", "", "BE", redis.print);
client.hset("Hanna Heiter", 11102234,"BE", "BE", "BE", "BE", "", "", "BE", redis.print);

client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
    
}));
    
    
    
    //Server eroeffnung 
    app.listen(3000);
    