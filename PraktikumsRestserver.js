'use strict';
var express = require("express");
var app = express();
var bodyparser ? require("body-parser");
var psso = require("PSSO");

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
]

var studenten[
    {nameDesStudent: "Deborah Gäb", semester: 4, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Hannah Heiter", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Susi Sonnenschein", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Ginny Weasley", semester: 2, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Hermine Granger", semester: 4, studeniengang: "Medieninformatik"}
    {nameDesStudent: "Luna Lovegood", semester: 4, studeniengang: "Medieninformatik"}
]

var studentInSTPraktikum[
    {nameDesStudent: "Deborah Gäb", bestanden: false}
    {nameDesStudent: "Hannah Heiter", bestanden:false }
    {nameDesStudent: "Susi Sonnenschein", bestanden: false}
    {nameDesStudent: "Ginny Weasley", bestanden: false}
    {nameDesStudent: "Hermine Granger", bestanden: false}
    {nameDesStudent: "Luna Lovegood", bestanden: false}
    
]

app.get('\fachMitPraktikum', function(rqu, res){
    if(req.query.praktikum !== undefined){
        res.json(faecher.filter(function(e, i, arr){
            return e.faecher == req.query.praktikum.
        }));
    }
    else{
        res.json(faecher);
    }

   app.get('\studenten', function(rqu, res){
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
    
}));