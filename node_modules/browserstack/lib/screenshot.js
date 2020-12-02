var util = require("util");
var BaseClient = require("./client");
var extend = require("./extend");

function ScreenshotClient(settings) {
	this.server = {
		host: "www.browserstack.com"
	};
	BaseClient.call(this, settings);
}

util.inherits(ScreenshotClient, BaseClient);

// public API
extend(ScreenshotClient.prototype, {
	getBrowsers: function(fn) {
		this.request({
			path: this.path("/browsers.json")
		}, fn);
	},

	generateScreenshots: function(options, fn) {
		var data = JSON.stringify(options);
		this.request({
			method: "POST",
			path: this.path("")
		}, data, fn);
	},

	getJob: function(id, fn) {
		this.request({
			path: this.path("/" + id + ".json")
		}, fn);
	}
});

// internal API
extend(ScreenshotClient.prototype, {
	path: function(path) {
		return "/screenshots" + path;
	}
});

module.exports = {
	createClient: function(settings) {
		return new ScreenshotClient(settings);
	}
};
