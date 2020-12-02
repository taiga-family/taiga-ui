"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const http = require("selenium-webdriver/http");
const remote = require("selenium-webdriver/remote");
class Ptor {
    constructor() {
        this.$ = function (search) {
            return null;
        };
        this.$$ = function (search) {
            return null;
        };
        // Export protractor classes.
        this.ProtractorBrowser = require('./browser').ProtractorBrowser;
        this.ElementFinder = require('./element').ElementFinder;
        this.ElementArrayFinder = require('./element').ElementArrayFinder;
        this.ProtractorBy = require('./locators').ProtractorBy;
        this.ProtractorExpectedConditions = require('./expectedConditions').ProtractorExpectedConditions;
        // Export selenium webdriver.
        this.ActionSequence = webdriver.ActionSequence;
        this.Browser = webdriver.Browser;
        this.Builder = webdriver.Builder;
        this.Button = webdriver.Button;
        this.Capabilities = webdriver.Capabilities;
        this.Capability = webdriver.Capability;
        this.EventEmitter = webdriver.EventEmitter;
        this.FileDetector = webdriver.FileDetector;
        this.Key = webdriver.Key;
        this.Session = webdriver.Session;
        this.WebDriver = webdriver.WebDriver;
        this.WebElement = webdriver.WebElement;
        this.WebElementPromise = webdriver.WebElementPromise;
        this.error = webdriver.error;
        this.logging = webdriver.logging;
        this.promise = webdriver.promise;
        this.until = webdriver.until;
        this.Command = require('selenium-webdriver/lib/command').Command;
        this.CommandName = require('selenium-webdriver/lib/command').Name;
        this.utils = { firefox: firefox, http: http, remote: remote, chrome: chrome };
    }
}
exports.Ptor = Ptor;
exports.protractor = new Ptor();
//# sourceMappingURL=ptor.js.map