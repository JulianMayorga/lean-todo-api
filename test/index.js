var Lab = require('lab');
var api = require('../api/index.js');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('Lean todo api', function () {

	describe('#task', function () {

		it('GET /task returns list of tasks', function (done) {

			api.inject('/task', function (res) {
				expect(res.result).to.exist;
				expect(res.statusCode).to.equal(200);
				expect(res.payload).to.equal('[{"id":1,"text":"do something","done":false}' + ',{"id":2,"text":"go shopping","done":true}]');
				done();
			});
		});

		it('GET /task/{:id} returns a task', function (done) {

			api.inject('/task/1', function (res) {
				expect(res.result).to.exist;
				expect(res.statusCode).to.equal(200);
				expect(res.payload).to.equal('{"id":1,"text":"do something","done":false}');
				done();
			});
		});
	});
});
