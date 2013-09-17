var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Define the route
var tasksList = {
  handler: function (request) {

    request.reply({ greeting: 'some tasks' });
  }
};

// Add the route
server.route({
  method: 'GET',
  path: '/task',
  config: tasksList
});

// Start the server
server.start();

var exports = module.exports = server;
