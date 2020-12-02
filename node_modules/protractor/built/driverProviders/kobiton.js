"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This is an implementation of the Kobiton Driver Provider.
 * It is responsible for setting up the account object, tearing
 * it down, and setting up the driver correctly.
 */
const q = require("q");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
let logger = new logger_1.Logger('kobiton');
class Kobiton extends driverProvider_1.DriverProvider {
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
        this.config_.capabilities['kobitonUser'] = this.config_.kobitonUser;
        this.config_.capabilities['kobitonKey'] = this.config_.kobitonKey;
        this.config_.seleniumAddress = 'https://' + this.config_.kobitonUser + ':' +
            this.config_.kobitonKey + '@api.kobiton.com/wd/hub';
        logger.info('Using Kobiton selenium server at ' + this.config_.seleniumAddress);
        deferred.resolve();
        return deferred.promise;
    }
}
exports.Kobiton = Kobiton;
//# sourceMappingURL=kobiton.js.map