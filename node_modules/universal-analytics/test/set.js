
var request = require("request");
var qs = require("querystring");
var uuid = require("uuid");
var should = require("should");
var sinon = require("sinon");
var url = require("url");

var ua = require("../lib/index.js");
var utils = require("../lib/utils.js")
var config = require("../lib/config.js")


describe("ua", function () {



	describe("#set", function () {
		var _enqueue;

		beforeEach(function () {
			_enqueue = sinon.stub(ua.Visitor.prototype, "_enqueue", function () {
				if (arguments.length === 3 && typeof arguments[2] === 'function') {
					arguments[2]();
				}
				return this;
			});
		});

		afterEach(function () {
			_enqueue.restore()
		});


		it("should set persistent parameter", function () {

			var visitor = ua("UA-XXXXX-XX")
			visitor.set("cd1", "bar")
			visitor.pageview("/foo")


			_enqueue.calledOnce.should.equal(true, "#_enqueue should have been called once");
			_enqueue.args[0][0].should.equal("pageview");
			_enqueue.args[0][1].should.have.keys("dp", "cd1")


			visitor.pageview("/foo/foo").event("Test Event", "Action")

			_enqueue.args[1][0].should.equal("pageview");
			_enqueue.args[1][1].should.have.keys("dp", "cd1")

			_enqueue.args[2][0].should.equal("event");
			_enqueue.args[2][1].should.have.keys("ec", "ea", "p", "cd1")
		});

	});

});










