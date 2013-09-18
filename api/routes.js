var Hapi = require('hapi');

var Task = require('./task');

exports.endpoints = [

  { method: 'GET', path: '/task', config: { handler: Task.list } },
  { method: 'GET', path: '/task/{id}', config: { handler: Task.get } }
];
