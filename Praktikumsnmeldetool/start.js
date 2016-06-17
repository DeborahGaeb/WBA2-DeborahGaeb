var http = require('http');
var url = require('url');

function start(router){
    console.log("Starten.");
    
    function onRequest(req, res){
        var pathname = url.parse(request.url).pathname; 
            router.route(pathname);  //???
        response.writeHead(200, {
            "Content-Type": "text/plain"
    });
    response.write("Praktikumstool");
    response.end();
}

var port = process.env.port ||3000; 
http.createServer(onRequest).listen(port);
console.log("ist gestartet"); //Konsolen ausgabe

}

exports.start = start;