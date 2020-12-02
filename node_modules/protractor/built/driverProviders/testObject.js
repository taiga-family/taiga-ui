"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This is an implementation of the TestObject Driver Provider.
 * It is responsible for setting up the account object, tearing
 * it down, and setting up the driver correctly.
 */
const q = require("q");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
let logger = new logger_1.Logger('testobject');
class TestObject extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @return {q.promise} A promise which will resolve when the environment is
     *      ready to test.
     */
    setupDriverEnv() {
        let deferred = q.defer();
        this.config_.capabilities['testobject.user'] = this.config_.testobjectUser;
        this.config_.capabilities['testobject_api_key'] = this.config_.testobjectKey;
        this.config_.seleniumAddress = 'https://us1.appium.testobject.com/wd/hub';
        logger.info('Using TestObject selenium server at ' + this.config_.seleniumAddress);
        deferred.resolve();
        return deferred.promise;
    }
}
exports.TestObject = TestObject;
//# sourceMappingURL=testObject.js.map