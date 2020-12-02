"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  This is an implementation of the Hosted Driver Provider.
 *  It is responsible for setting up the account object, tearing
 *  it down, and setting up the driver correctly.
 */
const q = require("q");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
let logger = new logger_1.Logger('hosted');
class Hosted extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupDriverEnv() {
        logger.info('Using the selenium server at ' + this.config_.seleniumAddress);
        return q.fcall(function () { });
    }
}
exports.Hosted = Hosted;
//# sourceMappingURL=hosted.js.map