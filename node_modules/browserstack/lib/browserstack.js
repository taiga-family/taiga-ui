var browserstackApi = require("./api");
var browserstackAutomate = require("./automate");
var browserstackAppAutomate = require("./app-automate");
var browserstackScreenshot = require("./screenshot");

module.exports = {
	createClient: browserstackApi.createClient,
	createAutomateClient: browserstackAutomate.createClient,
	createAppAutomateClient: browserstackAppAutomate.createClient,
	createScreenshotClient: browserstackScreenshot.createClient
};
