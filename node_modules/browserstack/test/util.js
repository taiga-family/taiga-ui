"use strict";

var extend = require("../lib/extend");

var pollWorkerRetries = 30;
var pollWorkerRetryInterval = 2000;

var encoding = process.env.TRAVIS ? "base64" : "utf8";
module.exports.browserStack = {
	username: Buffer.from(process.env.BROWSERSTACK_USERNAME || "", encoding).toString(),
	password: Buffer.from(process.env.BROWSERSTACK_KEY || "", encoding).toString()
};

module.exports.terminateWorkers = function terminateWorkers(client, workers, callback) {
	if (!workers.length) {
		return callback(null);
	}

	if (workers[0].id) {
		workers = workers.map(function(w) {
			return w.id;
		});
	}

	client.terminateWorker(workers.shift(), function() {
		if (!workers.length) {
			return callback(null);
		}

		terminateWorkers(client, workers, callback);
	});
};

module.exports.pollApiWorker = function pollApiWorker(client, worker, callback) {
	pollWorker(worker,
		client.getWorker.bind(client),
		function getWorkerId(worker) {
			return worker && worker.id;
		},
		function isWorkerRunning(worker) {
			return worker && worker.status === "running";
		}, callback);
};

module.exports.pollScreenshotWorker = function pollScreenshotWorker(client, worker, callback) {
	pollWorker(worker,
		client.getJob.bind(client),
		function getWorkerId(worker) {
			return worker && (worker.job_id || worker.id);
		},
		function isWorkerRunning(worker) {
			return worker && worker.state === "running";
		}, callback);
};

module.exports.validateBrowserObject = function validateBrowserObject(browser) {
	[
		"os",
		"os_version",
		"browser",
		browser.device ? "device" : "browser_version"
	].forEach(function(attr) {
		if (attr.match(/version/)) {
			browser[attr].should.be.a.String().and.match(/\S+/);
		} else {
			browser[attr].should.be.a.String().and.match(/^[a-zA-Z]+/);
		}
	});

	return browser;
};

module.exports.validateScreenshotJob = function validateScreenshotJob(job) {
	job.should.be.an.Object().and.not.be.empty();
	(job.job_id || job.id).should.match(/[a-zA-Z0-9]+/);

	[
		"quality",
		"win_res",
		"wait_time"
	].forEach(function(k) {
		job.should.have.property(k);
	});

	job.screenshots
		.map(this.validateBrowserObject)
		.forEach(function(screenshotState) {
			screenshotState.id.should.match(/[a-zA-Z0-9]+/);
			["processing", "pending", "queue", "running"].should.containEql(screenshotState.state);
		});
};

module.exports.validateWorker = function validateWorker(w) {
	w.should.be.an.Object();
	w.id.should.match(/\d+/);
	return w;
};

module.exports.merge = function merge(o, a) {
	return extend(extend({}, o), a);
};

function pollWorker(worker, getWorkerStatusFn, getWorkerIdFn, isWorkerRunningFn, callback) {
	var maxRetries = pollWorkerRetries;
	var retryInterval = pollWorkerRetryInterval;
	var workerId = getWorkerIdFn(worker);
	var timer;

	var pollWorkerState = function(id, callback) {
		if (--maxRetries < 1) {
			clearTimeout(timer);
			return callback(null, false);
		}

		getWorkerStatusFn(workerId, function(err, worker) {
			workerId = getWorkerIdFn(worker);

			if (err || !workerId) {
				clearTimeout(timer);
				return callback(err, false);
			}

			if (isWorkerRunningFn(worker)) {
				return callback(null, true);
			}

			setTimeout(function() {
				pollWorkerState(id, callback);
			}, retryInterval);
		});
	};

	pollWorkerState(workerId, callback);
}
