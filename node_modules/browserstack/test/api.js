"use strict";

var should = require("should");
var BrowserStack = require("../lib/browserstack");
var util = require("./util");

var username = util.browserStack.username;
var password = util.browserStack.password;

if (!username || !password) {
	throw new Error("Please set BROWSERSTACK_USERNAME and BROWSERSTACK_KEY environment variables.");
}

describe("BrowserStack API", function() {
	this.timeout(60000); // 60s

	var client;
	var workers = [];

	beforeEach(function() {
		client = BrowserStack.createClient({
			username: username,
			password: password
		});
	});

	afterEach(function(done) {
		util.terminateWorkers(client, workers, function() {
			workers = [];
			done();
		});
	});

	describe("API Status", function() {
		it("should get API status", function(done) {
			client.getApiStatus(function(err, status) {
				should.ifError(err);

				status.should.be.an.Object().and.have.keys([
					"running_sessions",
					"sessions_limit",
					"used_time",
					"total_available_time"
				]);

				done(err);
			});
		});
	});

	describe("Browser Listing", function() {
		it("should list browsers", function(done) {
			client.getBrowsers(function(err, browsers) {
				should.ifError(err);

				browsers.should.be.an.Array().and.not.be.empty();
				browsers.map(util.validateBrowserObject);

				done(err);
			});
		});

		it("should get latest browser versions", function(done) {
			client.getLatest(function(err, versions) {
				should.ifError(err);

				versions.should.be.an.Object().and.not.be.empty();
				done(err);
			});
		});

		it("should get the latest version for specified browser", function(done) {
			client.getBrowsers(function(err, browsers) {
				should.ifError(err);

				browsers = browsers.filter(function(browser) {
					return !browser.device;
				});

				var requests = browsers.length;

				browsers.forEach(function(browser) {
					client.getLatest(browser, function(err, version) {
						should.ifError(err);
						version.should.match(/\d+(\.)*\d*/);

						if (err || --requests < 1) {
							if (done) {
								done(err);
								done = null;
							}
						}
					});
				});
			});
		});

		it("should fail to get the latest version for invalid browser", function(done) {
			client.getLatest({
				os: "Windows",
				os_version: "10",
				browser: "mosaic"
			}, function(err, version) {
				should.ifError(err);
				should.equal(undefined, version);

				done(err);
			});
		});
	});

	describe("Worker API", function() {
		var sampleDesktopBrowser = {
			os: "Windows",
			os_version: "10",
			browser: "chrome",
			browser_version: "47.0",
			timeout: 20
		};

		var sampleDeviceBrowser = {
			device: "Google Nexus 6",
			os: "android",
			os_version: "5.0",
			browser: "Android Browser",
			timeout: 20
		};

		it("should create worker", function(done) {
			client.createWorker(util.merge(sampleDesktopBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);
				done(err);
			});
		});

		it("should create worker with latest edge", function(done) {
			client.createWorker({
				os: "Windows",
				os_version: "10",
				browser: "Edge",
				browser_version: "latest",
				url: "http://www.example.com",
				timeout: 20
			}, function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);
				done(err);
			});
		});

		it("should fail to create worker for invalid browser", function(done) {
			client.createWorker(util.merge(sampleDesktopBrowser, {
				url: "http://www.example.com",
				browser: "mosaic"
			}), function(err, worker) {
				err.should.be.an.Error();
				err.message.should.match(/validation failed/i);

				should.not.exist(worker);
				done();
			});
		});

		it("should create a worker with details", function(done) {
			client.createWorker(util.merge(sampleDesktopBrowser, {
				url: "http://www.example.com",
				name: "worker-1",
				build: "build-1",
				project: "project-1"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);
				done(err);
			});
		});

		it("should create a worker for a device browser", function(done) {
			client.createWorker(util.merge(sampleDeviceBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);
				done(err);
			});
		});

		it("should fail to create worker for invalid device", function(done) {
			client.createWorker(util.merge(sampleDeviceBrowser, {
				url: "http://www.example.com",
				device: "Nexus 5S"
			}), function(err, worker) {

				err.should.be.an.Error();
				err.message.should.match(/validation failed/i);

				should.not.exist(worker);
				done();
			});
		});

		it("should get created worker by id", function(done) {
			client.createWorker(util.merge(sampleDeviceBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);

				client.getWorker(worker.id, function(err, worker2) {
					should.ifError(err);

					util.validateWorker(worker2);
					should.equal(worker.id, worker2.id, "Worker id mismatch");
					done(err);
				});
			});
		});

		it("should fetch list of workers", function(done) {
			client.createWorker(util.merge(sampleDeviceBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);

				client.getWorkers(function(err, workers) {
					should.ifError(err);

					workers.should.be.an.Array().and.not.be.empty();

					var workerExists = workers.filter(function(w) {
						util.validateWorker(w);
						return (w.id === worker.id);
					}).shift();

					done(workerExists ? null : new Error("failed to fetch created worker"));
				});
			});
		});

		it("should terminate a worker by id", function(done) {
			client.createWorker(util.merge(sampleDeviceBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);

				client.terminateWorker(worker.id, function(err, data) {
					should.ifError(err);

					data.should.be.an.Object();
					data.time.should.match(/\d+/);

					done(err);
				});
			});
		});
	});

	describe("Worker Session APIs", function() {
		this.timeout(100000);

		var sampleDesktopBrowser = {
			os: "Windows",
			os_version: "10",
			browser: "chrome",
			browser_version: "47.0",
			timeout: 120
		};

		it("should change worker url", function(done) {
			client.createWorker(util.merge(sampleDesktopBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);

				util.validateWorker(worker);
				workers.push(worker);

				util.pollApiWorker(client, worker, function(err, isRunning) {
					if (isRunning) {
						return client.changeUrl(worker.id, {
							url: "http://www.example.net",
							timeout: 20
						}, function(err, data) {
							should.ifError(err);

							data.should.be.an.Object();
							data.message.should.match(/browser updated with new url/i);

							done(err);
						});
					}

					should.ifError(err);
					return done(err || new Error("worker remained in queue until timeout"));
				});

			});
		});

		it("should take screenshot of worker session", function(done) {
			client.createWorker(util.merge(sampleDesktopBrowser, {
				url: "http://www.example.com"
			}), function(err, worker) {
				should.ifError(err);
				util.validateWorker(worker);
				workers.push(worker);

				util.pollApiWorker(client, worker, function(err, isRunning) {
					if (isRunning) {

						// wait for page load
						var pageLoadTime = 5000;

						return setTimeout(function() {
							client.takeScreenshot(worker.id, function(err, data) {
								should.ifError(err);

								data.should.be.an.Object();
								data.url.should.match(/^http(s)?:\/\/.*\.png$/i);

								done(err);
							});
						}, pageLoadTime);
					}

					should.ifError(err);
					return done(err || new Error("worker remained in queue until timeout"));
				});

			});
		});

	});
});
