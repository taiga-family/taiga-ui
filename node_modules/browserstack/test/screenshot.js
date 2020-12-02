"use strict";

var should = require("should");
var BrowserStack = require("../lib/browserstack");
var util = require("./util");

var username = util.browserStack.username;
var password = util.browserStack.password;

if (!username || !password) {
	throw new Error("Please set BROWSERSTACK_USERNAME and BROWSERSTACK_KEY environment variables.");
}

describe("Screenshot API", function() {
	this.timeout(300000); // 300s

	var client;

	beforeEach(function() {
		client = BrowserStack.createScreenshotClient({
			username: username,
			password: password
		});
	});

	it("should list browsers", function(done) {
		client.getBrowsers(function(err, browsers) {
			should.ifError(err);

			browsers.should.be.an.Array().and.not.be.empty();
			browsers.map(util.validateBrowserObject);

			done(err);
		});
	});

	it("should generate screenshots for multiple browsers", function(done) {
		var options = {
			url: "http://www.example.com",
			browsers: ["40.0", "41.0", "42.0"].map(function(v) {
				return {
					os: "Windows",
					os_version: "7",
					browser: "chrome",
					browser_version: v
				};
			})
		};

		client.generateScreenshots(options, function(err, job) {
			should.ifError(err);
			util.validateScreenshotJob(job);

			util.pollScreenshotWorker(client, job, function(err, isRunning) {
				if (!err && !isRunning) {

					// this is highly dependent on demand and queue time at BrowserStack;
					// little point in stalling the test run waiting for this job to complete

					// print warning in console for user to decide
					console.warn("\t[WARN] worker %s did not run within timeout", job.job_id);
				}

				done(err);
			});
		});
	});

	it("should fetch a screenshot job", function(done) {
		var options = {
			url: "http://www.example.com",
			browsers: [
				{
					os: "Windows",
					os_version: "7",
					browser: "chrome",
					browser_version: "42.0"
				}
			]
		};

		client.generateScreenshots(options, function(err, job) {
			should.ifError(err);
			util.validateScreenshotJob(job);

			client.getJob(job.job_id, function(err, job) {
				if (!err) {
					util.validateScreenshotJob(job);
				}

				done(err);
			});
		});
	});
});
