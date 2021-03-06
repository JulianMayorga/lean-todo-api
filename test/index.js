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

		it('POST /task inserts a task', function (done) {

			api.inject({method: 'POST', url: '/task', payload: '{"text":"study","done":false}'}, function (res) {
				expect(res.result).to.exist;
				expect(res.statusCode).to.equal(201);
				expect(res.payload).to.equal('{"id":3,"text":"study","done":false}');
				api.inject('/task', function (res) {
					expect(res.payload).to.equal('[' +
												 '{"id":1,"text":"do something","done":false}' +
												 ',{"id":2,"text":"go shopping","done":true}' +
												 ',{"id":3,"text":"study","done":false}]');
					done();
				});
			});
		});

		it('PUT /task updates a task', function (done) {

			api.inject({method: 'PUT', url: '/task', payload: '{"id":1,"text":"do something","done":true}'}, function (res) {
				expect(res.result).to.exist;
				expect(res.statusCode).to.equal(200);
				expect(res.payload).to.equal('{"id":1,"text":"do something","done":true}');
				done();
			});
		});

		describe('DELETE', function () {
			it('deletes a task when successful', function (done) {

				api.inject({method: 'DELETE', url: '/task/1'}, function (res) {
					expect(res.result).to.exist;
					expect(res.statusCode).to.equal(204);
					done();
				});
			});

			it('returns 404 when resource doesnt exist', function (done) {
				api.inject({method: 'DELETE', url: '/task/4'}, function (res) {
					expect(res.result).to.exist;
					expect(res.statusCode).to.equal(404);
					done();
				});
			});
		});
	});
});
