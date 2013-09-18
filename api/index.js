var Hapi = require('hapi');

var routes = require('./routes');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

server.addRoutes(routes.endpoints);

server.start();

var exports = module.exports = server;
