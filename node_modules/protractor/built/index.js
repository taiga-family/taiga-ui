"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Re-export selenium-webdriver types.
var selenium_webdriver_1 = require("selenium-webdriver");
exports.ActionSequence = selenium_webdriver_1.ActionSequence;
exports.Browser = selenium_webdriver_1.Browser;
exports.Builder = selenium_webdriver_1.Builder;
exports.Button = selenium_webdriver_1.Button;
exports.Capabilities = selenium_webdriver_1.Capabilities;
exports.Capability = selenium_webdriver_1.Capability;
exports.error = selenium_webdriver_1.error;
exports.EventEmitter = selenium_webdriver_1.EventEmitter;
exports.FileDetector = selenium_webdriver_1.FileDetector;
exports.Key = selenium_webdriver_1.Key;
exports.logging = selenium_webdriver_1.logging;
exports.promise = selenium_webdriver_1.promise;
exports.Session = selenium_webdriver_1.Session;
exports.until = selenium_webdriver_1.until;
exports.WebDriver = selenium_webdriver_1.WebDriver;
exports.WebElement = selenium_webdriver_1.WebElement;
exports.WebElementPromise = selenium_webdriver_1.WebElementPromise;
// Re-export public types.
var browser_1 = require("./browser");
exports.ProtractorBrowser = browser_1.ProtractorBrowser;
var element_1 = require("./element");
exports.ElementArrayFinder = element_1.ElementArrayFinder;
exports.ElementFinder = element_1.ElementFinder;
var expectedConditions_1 = require("./expectedConditions");
exports.ProtractorExpectedConditions = expectedConditions_1.ProtractorExpectedConditions;
var locators_1 = require("./locators");
exports.ProtractorBy = locators_1.ProtractorBy;
var ptor_1 = require("./ptor");
exports.Ptor = ptor_1.Ptor;
var runner_1 = require("./runner");
exports.Runner = runner_1.Runner;
exports.utils = {
    firefox: require('selenium-webdriver/firefox'),
    http: require('selenium-webdriver/http'),
    remote: require('selenium-webdriver/remote')
};
exports.Command = require('selenium-webdriver/lib/command').Command;
exports.CommandName = require('selenium-webdriver/lib/command').Name;
Object.defineProperty(exports, 'protractor', { get: () => global['protractor'] });
function registerGlobal(name) {
    Object.defineProperty(exports, name, { get: () => exports.protractor ? exports.protractor[name] : undefined });
}
registerGlobal('browser');
registerGlobal('$');
registerGlobal('$$');
registerGlobal('element');
registerGlobal('By');
registerGlobal('by');
registerGlobal('ExpectedConditions');
//# sourceMappingURL=index.js.map