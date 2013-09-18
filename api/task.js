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

exports.create = function (request) {
	var task = {
		id: tasks[tasks.length - 1].id + 1,
		text: request.payload.text,
		done: request.payload.done
	};
	tasks.push(task);
	request.reply(task).code(201);
}
