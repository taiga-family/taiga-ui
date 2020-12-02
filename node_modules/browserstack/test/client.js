"use strict";

var assert = require("assert");
var BrowserStack = require("../lib/browserstack");
var util = require("./util");

var apiLatestVersion = 4;

var username = util.browserStack.username;
var password = util.browserStack.password;

if (!username || !password) {
	throw new Error("Please set BROWSERSTACK_USERNAME and BROWSERSTACK_KEY environment variables.");
}

describe("Public API", function() {
	it("exposes API and Screenshots clients", function() {
		[
			"createClient",
			"createScreenshotClient"
		].forEach(function(fn) {
			assert.equal("function", typeof BrowserStack[fn]);
		});
	});

	describe("new ApiClient", function() {
		var className = "ApiClient";

		it("should return an API client", function() {
			var client = BrowserStack.createClient({
				username: username,
				password: password
			});

			assert.equal(className, client.constructor.name, "instance of " + className);
		});

		it("should return an API client of a particular version", function() {
			for (var version = 1; version <= apiLatestVersion; version++) {
				var client = BrowserStack.createClient({
					username: username,
					password: password,
					version: version
				});

				assert.equal(className, client.constructor.name, "instance of ApiClient");
				assert.equal(version, client.version, "ApiClient version mismatch");
			}
		});

		it("should throw an error for invalid ApiClient version", function() {
			try {
				BrowserStack.createClient({
					username: username,
					password: password,
					version: -1
				});
			} catch (err) {
				assert.ok(err.toString().match(/invalid version/i));
			}
		});
	});

	describe("new ScreenshotClient", function() {
		var className = "ScreenshotClient";

		it("should return a screenshot client", function() {
			var client = BrowserStack.createScreenshotClient({
				username: username,
				password: password
			});

			assert.equal(className, client.constructor.name, "instance of " + className);
		});
	});
});
