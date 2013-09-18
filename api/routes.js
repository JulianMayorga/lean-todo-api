var Hapi = require('hapi');

var tasks = [
	{ id:1, text: 'do something', done: false },
	{ id:2, text: 'go shopping', done: true}
];

function getTasks (request) {
    request.reply(tasks);
}

function getTask (request) {
    var task = tasks.filter(function (_task) {
      return _task.id === parseInt(request.params.id);
	}).pop();
    request.reply(task);
}

exports.endpoints = [

  { method: 'GET', path: '/task', config: { handler: getTasks } },
  { method: 'GET', path: '/task/{id}', config: { handler: getTask } }
];
