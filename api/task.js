var tasks = [
	{ id:1, text: 'do something', done: false },
	{ id:2, text: 'go shopping', done: true}
];

exports.list = function (request) {
    request.reply(tasks);
}

exports.get = function (request) {
    var task = tasks.filter(function (_task) {
      return _task.id === parseInt(request.params.id);
	}).pop();
    request.reply(task);
}
