"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  This is an implementation of the Use Existing WebDriver Driver Provider.
 *  It is responsible for setting up the account object, tearing it down, and
 *  setting up the driver correctly.
 */
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
const http = require('selenium-webdriver/http');
let logger = new logger_1.Logger('useExistingWebDriver');
class UseExistingWebDriver extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupDriverEnv() {
        const defer = q.defer();
        this.config_.seleniumWebDriver.getSession().then((session) => {
            logger.info('Using session id - ' + session.getId());
            return defer.resolve();
        });
        return q(undefined);
    }
    /**
     * Getting a new driver by attaching an existing session.
     *
     * @public
     * @return {WebDriver} webdriver instance
     */
    getNewDriver() {
        const newDriver = this.config_.seleniumWebDriver;
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
exports.UseExistingWebDriver = UseExistingWebDriver;
//# sourceMappingURL=useExistingWebDriver.js.map