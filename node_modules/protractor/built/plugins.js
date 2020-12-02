"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const webdriver = require("selenium-webdriver");
const configParser_1 = require("./configParser");
const logger_1 = require("./logger");
const ptor_1 = require("./ptor");
let logger = new logger_1.Logger('plugins');
var PromiseType;
(function (PromiseType) {
    PromiseType[PromiseType["Q"] = 0] = "Q";
    PromiseType[PromiseType["WEBDRIVER"] = 1] = "WEBDRIVER";
})(PromiseType = exports.PromiseType || (exports.PromiseType = {}));
/**
 * The plugin API for Protractor.  Note that this API is unstable. See
 * plugins/README.md for more information.
 *
 * @constructor
 * @param {Object} config parsed from the config file
 */
class Plugins {
    constructor(config) {
        /**
         * @see docs/plugins.md#writing-plugins for information on these functions
         */
        this.setup = this.pluginFunFactory('setup', PromiseType.Q);
        this.onPrepare = this.pluginFunFactory('onPrepare', PromiseType.Q);
        this.teardown = this.pluginFunFactory('teardown', PromiseType.Q);
        this.postResults = this.pluginFunFactory('postResults', PromiseType.Q);
        this.postTest = this.pluginFunFactory('postTest', PromiseType.Q);
        this.onPageLoad = this.pluginFunFactory('onPageLoad', PromiseType.WEBDRIVER);
        this.onPageStable = this.pluginFunFactory('onPageStable', PromiseType.WEBDRIVER);
        this.waitForPromise = this.pluginFunFactory('waitForPromise', PromiseType.WEBDRIVER);
        this.waitForCondition = this.pluginFunFactory('waitForCondition', PromiseType.WEBDRIVER, true);
        this.pluginObjs = [];
        this.assertions = {};
        this.resultsReported = false;
        if (config.plugins) {
            config.plugins.forEach((pluginConf, i) => {
                let path;
                if (pluginConf.path) {
                    path = configParser_1.ConfigParser.resolveFilePatterns(pluginConf.path, true, config.configDir)[0];
                    if (!path) {
                        throw new Error('Invalid path to plugin: ' + pluginConf.path);
                    }
                }
                else {
                    path = pluginConf.package;
                }
                let pluginObj;
                if (path) {
                    pluginObj = require(path);
                }
                else if (pluginConf.inline) {
                    pluginObj = pluginConf.inline;
                }
                else {
                    throw new Error('Plugin configuration did not contain a valid path or ' +
                        'inline definition.');
                }
                this.annotatePluginObj(pluginObj, pluginConf, i);
                logger.debug('Plugin "' + pluginObj.name + '" loaded.');
                this.pluginObjs.push(pluginObj);
            });
        }
    }
    ;
    /**
     * Adds properties to a plugin's object
     *
     * @see docs/plugins.md#provided-properties-and-functions
     */
    annotatePluginObj(obj, conf, i) {
        let addAssertion = (info, passed, message) => {
            if (this.resultsReported) {
                throw new Error('Cannot add new tests results, since they were already ' +
                    'reported.');
            }
            info = info || {};
            const specName = info.specName || (obj.name + ' Plugin Tests');
            const assertion = { passed: passed };
            if (!passed) {
                assertion.errorMsg = message;
                if (info.stackTrace) {
                    assertion.stackTrace = info.stackTrace;
                }
            }
            this.assertions[specName] = this.assertions[specName] || [];
            this.assertions[specName].push(assertion);
        };
        obj.name = obj.name || conf.name || conf.path || conf.package || ('Plugin #' + i);
        obj.config = conf;
        obj.addFailure = (message, info) => {
            addAssertion(info, false, message);
        };
        obj.addSuccess = (options) => {
            addAssertion(options, true);
        };
        obj.addWarning = (message, options) => {
            options = options || {};
            logger.warn('Warning ' +
                (options.specName ? 'in ' + options.specName : 'from "' + obj.name + '" plugin') + ': ' +
                message);
        };
    }
    printPluginResults(specResults) {
        const green = '\x1b[32m';
        const red = '\x1b[31m';
        const normalColor = '\x1b[39m';
        const printResult = (message, pass) => {
            logger.info(pass ? green : red, '\t', pass ? 'Pass: ' : 'Fail: ', message, normalColor);
        };
        for (const specResult of specResults) {
            const passed = specResult.assertions.map(x => x.passed).reduce((x, y) => (x && y), true);
            printResult(specResult.description, passed);
            if (!passed) {
                for (const assertion of specResult.assertions) {
                    if (!assertion.passed) {
                        logger.error('\t\t' + assertion.errorMsg);
                        if (assertion.stackTrace) {
                            logger.error('\t\t' + assertion.stackTrace.replace(/\n/g, '\n\t\t'));
                        }
                    }
                }
            }
        }
    }
    /**
     * Gets the tests results generated by any plugins
     *
     * @see lib/frameworks/README.md#requirements for a complete description of what
     *     the results object must look like
     *
     * @return {Object} The results object
     */
    getResults() {
        const results = { failedCount: 0, specResults: [] };
        for (const specName in this.assertions) {
            results.specResults.push({ description: specName, assertions: this.assertions[specName] });
            results.failedCount +=
                this.assertions[specName].filter(assertion => !assertion.passed).length;
        }
        this.printPluginResults(results.specResults);
        this.resultsReported = true;
        return results;
    }
    ;
    /**
     * Returns true if any loaded plugin has skipAngularStability enabled.
     *
     * @return {boolean}
     */
    skipAngularStability() {
        const result = this.pluginObjs.some(pluginObj => pluginObj.skipAngularStability);
        return result;
    }
    ;
    /**
     * Calls a function from a plugin safely.  If the plugin's function throws an
     * exception or returns a rejected promise, that failure will be logged as a
     * failed test result instead of crashing protractor.  If the tests results have
     * already been reported, the failure will be logged to the console.
     *
     * @param {Object} pluginObj The plugin object containing the function to be run
     * @param {string} funName The name of the function we want to run
     * @param {*[]} args The arguments we want to invoke the function with
     * @param {PromiseType} promiseType The type of promise (WebDriver or Q) that
     *    should be used
     * @param {boolean} resultsReported If the results have already been reported
     * @param {*} failReturnVal The value to return if the function fails
     *
     * @return {webdriver.promise.Promise|Q.Promise} A promise which resolves to the
     *     function's return value
     */
    safeCallPluginFun(pluginObj, funName, args, promiseType, failReturnVal) {
        const resolver = (done) => {
            const logError = (e) => {
                if (this.resultsReported) {
                    this.printPluginResults([{
                            description: pluginObj.name + ' Runtime',
                            assertions: [{
                                    passed: false,
                                    errorMsg: 'Failure during ' + funName + ': ' + (e.message || e),
                                    stackTrace: e.stack
                                }]
                        }]);
                }
                else {
                    pluginObj.addFailure('Failure during ' + funName + ': ' + e.message || e, { stackTrace: e.stack });
                }
                done(failReturnVal);
            };
            try {
                const result = pluginObj[funName].apply(pluginObj, args);
                if (webdriver.promise.isPromise(result)) {
                    result.then(done, logError);
                }
                else {
                    done(result);
                }
            }
            catch (e) {
                logError(e);
            }
        };
        if (promiseType == PromiseType.Q) {
            return q.Promise(resolver);
        }
        else if (ptor_1.protractor.browser.controlFlowIsEnabled()) {
            return new webdriver.promise.Promise(resolver);
        }
        else {
            return new Promise(resolver);
        }
    }
    pluginFunFactory(funName, promiseType, failReturnVal) {
        return (...args) => {
            const promises = this.pluginObjs.filter(pluginObj => typeof pluginObj[funName] === 'function')
                .map(pluginObj => this.safeCallPluginFun(pluginObj, funName, args, promiseType, failReturnVal));
            return promiseType == PromiseType.Q ? q.all(promises) : webdriver.promise.all(promises);
        };
    }
}
exports.Plugins = Plugins;
//# sourceMappingURL=plugins.js.map