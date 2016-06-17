//start Klasse zum Starten des Servers
var server = require('./start');
var router = require('./router');
var requestHandler = require('./handler');

var handler = {};
handler["./"] = requestHandler.home;
handler["./show"] = requestHandler.show;
handler["./upload"] = requestHandler.upload;

server.start(router.route, handler);