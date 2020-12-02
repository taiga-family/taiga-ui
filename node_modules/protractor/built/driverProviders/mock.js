"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This is an mock implementation of the Driver Provider.
 * It returns a fake webdriver and never actually contacts a selenium
 * server.
 */
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const driverProvider_1 = require("./driverProvider");
class MockExecutor {
    execute(command) { }
}
exports.MockExecutor = MockExecutor;
class Mock extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * An execute function that returns a promise with a test value.
     */
    execute() {
        let deferred = q.defer();
        deferred.resolve({ value: 'test_response' });
        return deferred.promise;
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve immediately.
     */
    setupDriverEnv() {
        return q.fcall(function () { });
    }
    /**
     * Create a new driver.
     *
     * @public
     * @override
     * @return webdriver instance
     */
    getNewDriver() {
        let mockSession = new selenium_webdriver_1.Session('test_session_id', {});
        let newDriver = new selenium_webdriver_1.WebDriver(mockSession, new MockExecutor());
        this.drivers_.push(newDriver);
        return newDriver;
    }
}
exports.Mock = Mock;
//# sourceMappingURL=mock.js.map