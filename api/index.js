var Hapi = require('hapi');

var routes = require('./routes');

var port = process.env.PORT || 8000;

// Pregunta: Que significa el + antes de process...?
// Respuesta: El + antes de una variable retorna su representacion numerica
// Referencia: http://stackoverflow.com/questions/6682997/javascript-plus-symbol-before-variable
var server = new Hapi.Server(+port, '0.0.0.0', {cors: true});

server.addRoutes(routes.endpoints);

// Integrar hapi con heroku: https://github.com/wpreul/hapi-heroku
server.start(function () {
	server.settings.uri = process.env.HOST ? 'http://' + process.env.HOST + ':' + process.env.PORT : server.info.uri;
	console.log('Server started at: ' + server.settings.uri);
});

var exports = module.exports = server;
