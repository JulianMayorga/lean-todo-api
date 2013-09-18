var Hapi = require('hapi');

var routes = require('./routes');

var port = process.env.PORT || 8000;

// Create a server with a host and port
// Que significa el + antes de process...?
var server = new Hapi.Server(+process.env.PORT, '0.0.0.0');

server.addRoutes(routes.endpoints);

// https://github.com/wpreul/hapi-heroku
server.start(function () {
	server.settings.uri = process.env.HOST ? 'http://' + process.env.HOST + ':' + process.env.PORT : server.settings.uri;
	console.log('Server started at: ' + server.settings.uri);
});

var exports = module.exports = server;
