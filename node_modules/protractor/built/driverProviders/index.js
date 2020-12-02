"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./attachSession"));
__export(require("./browserStack"));
__export(require("./direct"));
__export(require("./driverProvider"));
__export(require("./hosted"));
__export(require("./local"));
__export(require("./mock"));
__export(require("./sauce"));
__export(require("./testObject"));
__export(require("./kobiton"));
__export(require("./useExistingWebDriver"));
const attachSession_1 = require("./attachSession");
const browserStack_1 = require("./browserStack");
const direct_1 = require("./direct");
const hosted_1 = require("./hosted");
const local_1 = require("./local");
const mock_1 = require("./mock");
const sauce_1 = require("./sauce");
const testObject_1 = require("./testObject");
const kobiton_1 = require("./kobiton");
const useExistingWebDriver_1 = require("./useExistingWebDriver");
const logger_1 = require("../logger");
let logger = new logger_1.Logger('driverProviders');
exports.buildDriverProvider = (config) => {
    let driverProvider;
    if (config.directConnect) {
        driverProvider = new direct_1.Direct(config);
        exports.logWarnings('directConnect', config);
    }
    else if (config.seleniumWebDriver) {
        driverProvider = new useExistingWebDriver_1.UseExistingWebDriver(config);
        exports.logWarnings('useExistingWebDriver', config);
    }
    else if (config.seleniumAddress) {
        if (config.seleniumSessionId) {
            driverProvider = new attachSession_1.AttachSession(config);
            exports.logWarnings('attachSession', config);
        }
        else {
            driverProvider = new hosted_1.Hosted(config);
            exports.logWarnings('hosted', config);
        }
    }
    else if (config.testobjectUser && config.testobjectKey) {
        driverProvider = new testObject_1.TestObject(config);
        exports.logWarnings('testObject', config);
    }
    else if (config.kobitonUser && config.kobitonKey) {
        driverProvider = new kobiton_1.Kobiton(config);
        exports.logWarnings('kobiton', config);
    }
    else if (config.browserstackUser && config.browserstackKey) {
        driverProvider = new browserStack_1.BrowserStack(config);
        exports.logWarnings('browserStack', config);
    }
    else if (config.sauceUser && config.sauceKey) {
        driverProvider = new sauce_1.Sauce(config);
        exports.logWarnings('sauce', config);
    }
    else if (config.seleniumServerJar) {
        driverProvider = new local_1.Local(config);
        exports.logWarnings('local', config);
    }
    else if (config.mockSelenium) {
        driverProvider = new mock_1.Mock(config);
        exports.logWarnings('mock', config);
    }
    else {
        driverProvider = new local_1.Local(config);
        exports.logWarnings('local', config);
    }
    return driverProvider;
};
exports.logWarnings = (providerType, config) => {
    let warnInto = 'Using driver provider ' + providerType +
        ', but also found extra driver provider parameter(s): ';
    let warnList = [];
    if ('directConnect' !== providerType && config.directConnect) {
        warnList.push('directConnect');
    }
    if ('attachSession' !== providerType && 'hosted' !== providerType && config.seleniumAddress) {
        warnList.push('seleniumAddress');
    }
    if ('attachSession' !== providerType && config.seleniumSessionId) {
        warnList.push('seleniumSessionId');
    }
    if ('testObject' !== providerType && config.testObjectUser) {
        warnList.push('testobjectUser');
    }
    if ('testObject' !== providerType && config.testObjectKey) {
        warnList.push('testobjectKey');
    }
    if ('kobitonUser' !== providerType && config.kobitonUser) {
        warnList.push('kobitonUser');
    }
    if ('kobitonKey' !== providerType && config.kobitonKey) {
        warnList.push('kobitonKey');
    }
    if ('browserStack' !== providerType && config.browserstackUser) {
        warnList.push('browserstackUser');
    }
    if ('browserStack' !== providerType && config.browserstackKey) {
        warnList.push('browserstackKey');
    }
    if ('sauce' !== providerType && config.sauceUser) {
        warnList.push('sauceUser');
    }
    if ('sauce' !== providerType && config.sauceKey) {
        warnList.push('sauceKey');
    }
    if ('local' !== providerType && config.seleniumServerJar) {
        warnList.push('seleniumServerJar');
    }
    if ('mock' !== providerType && config.mockSelenium) {
        warnList.push('mockSelenium');
    }
    if ('useExistingWebDriver' !== providerType && config.seleniumWebDriver) {
        warnList.push('seleniumWebDriver');
    }
    if (warnList.length !== 0) {
        logger.warn(warnInto + warnList.join(', '));
    }
};
//# sourceMappingURL=index.js.map