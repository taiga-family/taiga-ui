"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  This is a base driver provider class.
 *  It is responsible for setting up the account object, tearing
 *  it down, and setting up the driver correctly.
 */
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const bpRunner_1 = require("../bpRunner");
class DriverProvider {
    constructor(config) {
        this.config_ = config;
        this.drivers_ = [];
        this.bpRunner = new bpRunner_1.BlockingProxyRunner(config);
    }
    /**
     * Get all existing drivers.
     *
     * @public
     * @return array of webdriver instances
     */
    getExistingDrivers() {
        return this.drivers_.slice(); // Create a shallow copy
    }
    getBPUrl() {
        if (this.config_.blockingProxyUrl) {
            return this.config_.blockingProxyUrl;
        }
        return `http://localhost:${this.bpRunner.port}`;
    }
    /**
     * Create a new driver.
     *
     * @public
     * @return webdriver instance
     */
    getNewDriver() {
        let builder;
        if (this.config_.useBlockingProxy) {
            builder =
                new selenium_webdriver_1.Builder().usingServer(this.getBPUrl()).withCapabilities(this.config_.capabilities);
        }
        else {
            builder = new selenium_webdriver_1.Builder()
                .usingServer(this.config_.seleniumAddress)
                .usingWebDriverProxy(this.config_.webDriverProxy)
                .withCapabilities(this.config_.capabilities);
        }
        if (this.config_.disableEnvironmentOverrides === true) {
            builder.disableEnvironmentOverrides();
        }
        let newDriver = builder.build();
        this.drivers_.push(newDriver);
        return newDriver;
    }
    /**
     * Quit a driver.
     *
     * @public
     * @param webdriver instance
     */
    quitDriver(driver) {
        let driverIndex = this.drivers_.indexOf(driver);
        if (driverIndex >= 0) {
            this.drivers_.splice(driverIndex, 1);
        }
        if (driver.getSession() === undefined) {
            return selenium_webdriver_1.promise.when(undefined);
        }
        else {
            return driver.getSession()
                .then((session_) => {
                if (session_) {
                    return driver.quit();
                }
            })
                .catch(function (err) { });
        }
    }
    /**
     * Quits an array of drivers and returns a q promise instead of a webdriver one
     *
     * @param drivers {webdriver.WebDriver[]} The webdriver instances
     */
    static quitDrivers(provider, drivers) {
        let deferred = q.defer();
        selenium_webdriver_1.promise
            .all(drivers.map((driver) => {
            return provider.quitDriver(driver);
        }))
            .then(() => {
            deferred.resolve();
        }, () => {
            deferred.resolve();
        });
        return deferred.promise;
    }
    /**
     * Default update job method.
     * @return a promise
     */
    updateJob(update) {
        return q.fcall(function () { });
    }
    ;
    /**
     * Default setup environment method, common to all driver providers.
     */
    setupEnv() {
        let driverPromise = this.setupDriverEnv();
        if (this.config_.useBlockingProxy && !this.config_.blockingProxyUrl) {
            // TODO(heathkit): If set, pass the webDriverProxy to BP.
            return driverPromise.then(() => this.bpRunner.start());
        }
        return driverPromise;
    }
    ;
    /**
     * Teardown and destroy the environment and do any associated cleanup.
     * Shuts down the drivers.
     *
     * @public
     * @return {q.Promise<any>} A promise which will resolve when the environment is down.
     */
    teardownEnv() {
        return DriverProvider.quitDrivers(this, this.drivers_);
    }
}
exports.DriverProvider = DriverProvider;
//# sourceMappingURL=driverProvider.js.map