var Hapi = require('hapi');

var Task = require('./task');

exports.endpoints = [

  { method: 'GET', path: '/task', config: { handler: Task.list } },
  { method: 'GET', path: '/task/{id}', config: { handler: Task.get } },
  { method: 'POST', path: '/task', config: { handler: Task.create, payload: 'parse' } },
  { method: 'PUT', path: '/task', config: { handler: Task.update, payload: 'parse' } },
  { method: 'DELETE', path: '/task/{id}', config: { handler: Task.remove} }
];
