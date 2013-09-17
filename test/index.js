var Lab = require('lab');
var api = require('../api/index.js');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('Lean todo api', function () {

	describe('#task', function () {

		it('has task route', function (done) {

			api.inject('/task', function (res) {
				expect(res.result).to.exist;
				expect(res.statusCode).to.equal(200);
				expect(res.payload).to.contain('some tasks');
				done();
			});
		});
	});
});
