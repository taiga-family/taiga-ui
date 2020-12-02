var util = require("util");
var querystring = require("querystring");
var BaseClient = require("./client");
var extend = require("./extend");

function AppAutomateClient(settings) {
	this.server = {
		host: "api.browserstack.com"
	};
	BaseClient.call(this, settings);
}

util.inherits(AppAutomateClient, BaseClient);

// public API
extend(AppAutomateClient.prototype, {
	getPlan: function(fn) {
		this.request({
			path: this.path("/plan.json")
		}, fn);
	},

	getProjects: function(fn) {
		this.request({
			path: this.path("/projects.json")
		}, this.handleResponse(fn, this.stripChildKeys("automation_project")));
	},

	getProject: function(id, fn) {
		this.request({
			path: this.path("/projects/" + id + ".json")
		}, this.handleResponse(fn, function(project) {
			project = project.project;
			project.builds = this.stripChildKeys("automation_build")(project.builds);
			return project;
		}.bind(this)));
	},

	getBuilds: function(options, fn) {
		if (typeof options === "function") {
			fn = options;
			options = {};
		}

		this.request({
			path: this.path("/builds.json?" + querystring.stringify(options))
		}, this.handleResponse(fn, this.stripChildKeys("automation_build")));
	},

	getSessions: function(buildId, options, fn) {
		if (typeof fn === "undefined") {
			fn = options;
			options = {};
		}

		this.request({
			path: this.path("/builds/" + buildId + "/sessions.json?" +
				querystring.stringify(options))
		}, this.handleResponse(fn, this.stripChildKeys("automation_session")));
	},

	getSession: function(id, fn) {
		this.request({
			path: this.path("/sessions/" + id + ".json")
		}, this.handleResponse(fn, this.stripKey("automation_session")));
	},

	updateSession: function(id, options, fn) {
		var data = JSON.stringify(options);
		this.request({
			method: "PUT",
			path: this.path("/sessions/" + id + ".json")
		}, data, this.handleResponse(fn, this.stripKey("automation_session")));
	},

	deleteSession: function(id, fn) {
		this.request({
			method: "DELETE",
			path: this.path("/sessions/" + id + ".json")
		}, fn);
	}
});

// internal API
extend(AppAutomateClient.prototype, {
	path: function(path) {
		return "/app-automate" + path;
	},

	handleResponse: function(fn, modifier) {
		return function(error, data) {
			if (error) {
				return fn(error);
			}

			fn(null, modifier(data));
		};
	},

	stripKey: function(key) {
		return function(item) {
			return item[key];
		};
	},

	stripChildKeys: function(key) {
		return function(items) {
			return items.map(function(item) {
				return item[key];
			});
		};
	}
});

module.exports = {
	createClient: function(settings) {
		return new AppAutomateClient(settings);
	}
};
