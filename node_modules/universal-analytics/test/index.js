
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

	it("should be usable as a function", function () {
		ua("foo").should.be.instanceof(ua.Visitor);
	});

	it("should be usable as a constructor", function () {
		new ua("foo").should.be.instanceof(ua.Visitor);
	});

	it("should accept arguments (tid, cid, options)", function () {
		var tid = "UA-XXXXX-XX"
		var cid = uuid.v4()
		var options = {};

		var visitor = ua(tid, cid, options)

		visitor.tid.should.equal(tid)
		visitor.cid.should.equal(cid)
		visitor.options.should.equal(options)
	});

	it("should accept arguments (tid, cid)", function () {
		var tid = "UA-XXXXX-XX"
		var cid = uuid.v4()

		var visitor = ua(tid, cid)

		visitor.tid.should.equal(tid)
		visitor.cid.should.equal(cid)
		visitor.options.should.eql({}, "An empty options hash should've been created")
	});

	it("should accept arguments (tid, options)", function () {
		var tid = Math.random().toString();
		var options = {}

		var visitor = ua(tid, options)

		visitor.tid.should.equal(tid)
		utils.isUuid(visitor.cid).should.equal(true, "A valid random UUID should have been generated")
		visitor.options.should.eql(options)

	});

	it("should accept arguments (options)", function () {
		var options = {}

		var visitor = ua(options);

		visitor.should.have.property('tid', undefined);
		utils.isUuid(visitor.cid).should.equal(true, "A valid random UUID should have been generated")
		visitor.options.should.eql(options)
	});

	it("should accept tid and cid via the options arguments", function () {
		var options = {
			tid: "UA-XXXXX-XX",
			cid: uuid.v4()
		};

		var visitor = ua(options);

		visitor.tid.should.equal(options.tid)
		visitor.cid.should.equal(options.cid)
		visitor.options.should.equal(options)
	});

	it("should generate new cid (UUID) if provided one is in wrong format", function () {
		var options = {
			tid: "UA-XXXXX-XX",
			cid: "custom-format-cid"
		};

		var next = sinon.spy(uuid, 'v4')

		var visitor = ua(options);

		next.calledOnce.should.equal(true, "next() should've been called once")
		var generatedCid = next.returnValues[0]
		uuid.v4.restore()

		visitor.cid.should.not.equal(options.cid)
		visitor.cid.should.equal(generatedCid)
	});

	it("should accept custom cid format when strictCidFormat is false", function () {
		var options = {
			tid: "UA-XXXXX-XX",
			cid: "custom-format-cid",
			strictCidFormat: false
		};

		var next = sinon.spy(uuid, 'v4')

		var visitor = ua(options);

		next.called.should.equal(false, "next() should't be called")
		uuid.v4.restore()

		visitor.cid.should.equal(options.cid)
	});


	describe("params", function () {

	    var visitor;

	    before(function () {
	    	var tid = "UA-XXXXX-XX";
		    var cid = uuid.v4();
		    visitor = ua(tid, cid);
	    });

	    it('should not translate params', function(){
	        var params = {
	            tid: 1,
	            cid: 1,
	            somefake: 1,
	            v: 'a'
	        };

	        visitor._translateParams(params).should.eql(params);
	    })

	    it('should match all parameters and each should be in the list of accepted', function(){
	        var res = visitor._translateParams(config.parametersMap);
	        for (var i in res) {
	            if (res.hasOwnProperty(i)) {
	                res[i].should.equal(i);
	                config.acceptedParameters.should.containEql(i);
	            }
	        }
	    })

	});

});
