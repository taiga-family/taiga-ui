"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  This is an implementation of the Attach Session Driver Provider.
 *  It is responsible for setting up the account object, tearing
 *  it down, and setting up the driver correctly.
 */
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
const http = require('selenium-webdriver/http');
let logger = new logger_1.Logger('attachSession');
class AttachSession extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupDriverEnv() {
        logger.info('Using the selenium server at ' + this.config_.seleniumAddress);
        logger.info('Using session id - ' + this.config_.seleniumSessionId);
        return q(undefined);
    }
    /**
     * Getting a new driver by attaching an existing session.
     *
     * @public
     * @return {WebDriver} webdriver instance
     */
    getNewDriver() {
        const httpClient = new http.HttpClient(this.config_.seleniumAddress);
        const executor = new http.Executor(httpClient);
        const newDriver = selenium_webdriver_1.WebDriver.attachToSession(executor, this.config_.seleniumSessionId);
        this.drivers_.push(newDriver);
        return newDriver;
    }
    /**
     * Maintains the existing session and does not quit the driver.
     *
     * @public
     */
    quitDriver() {
        return selenium_webdriver_1.promise.when(undefined);
    }
}
exports.AttachSession = AttachSession;
//# sourceMappingURL=attachSession.js.map