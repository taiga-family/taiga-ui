"use strict";
/*
 * This is an implementation of the SauceLabs Driver Provider.
 * It is responsible for setting up the account object, tearing
 * it down, and setting up the driver correctly.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const q = require("q");
const util = require("util");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
const SauceLabs = require('saucelabs');
const SAUCE_REGIONS = {
    'us': '',
    'eu': 'eu-central-1.'
};
let logger = new logger_1.Logger('sauce');
class Sauce extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Hook to update the sauce job.
     * @public
     * @param {Object} update
     * @return {q.promise} A promise that will resolve when the update is complete.
     */
    updateJob(update) {
        let deferredArray = this.drivers_.map((driver) => {
            let deferred = q.defer();
            driver.getSession().then((session) => {
                logger.info('SauceLabs results available at http://saucelabs.com/jobs/' + session.getId());
                this.sauceServer_.updateJob(session.getId(), update, (err) => {
                    if (err) {
                        throw new Error('Error updating Sauce pass/fail status: ' + util.inspect(err));
                    }
                    deferred.resolve();
                });
            });
            return deferred.promise;
        });
        return q.all(deferredArray);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupDriverEnv() {
        let deferred = q.defer();
        this.sauceServer_ = new SauceLabs({
            hostname: this.getSauceEndpoint(this.config_.sauceRegion),
            username: this.config_.sauceUser,
            password: this.config_.sauceKey,
            agent: this.config_.sauceAgent,
            proxy: this.config_.sauceProxy
        });
        this.config_.capabilities['username'] = this.config_.sauceUser;
        this.config_.capabilities['accessKey'] = this.config_.sauceKey;
        this.config_.capabilities['build'] = this.config_.sauceBuild;
        let protocol = this.config_.sauceSeleniumUseHttp ? 'http://' : 'https://';
        let auth = protocol + this.config_.sauceUser + ':' + this.config_.sauceKey + '@';
        this.config_.seleniumAddress = auth +
            (this.config_.sauceSeleniumAddress ?
                this.config_.sauceSeleniumAddress :
                `ondemand.${this.getSauceEndpoint(this.config_.sauceRegion)}:443/wd/hub`);
        // Append filename to capabilities.name so that it's easier to identify
        // tests.
        if (this.config_.capabilities.name && this.config_.capabilities.shardTestFiles) {
            this.config_.capabilities.name +=
                (':' + this.config_.specs.toString().replace(/^.*[\\\/]/, ''));
        }
        logger.info('Using SauceLabs selenium server at ' +
            this.config_.seleniumAddress.replace(/\/\/.+@/, '//'));
        deferred.resolve();
        return deferred.promise;
    }
    /**
     * Get the Sauce Labs endpoint
     * @private
     * @param {string} region
     * @return {string} The endpoint that needs to be used
     */
    getSauceEndpoint(region) {
        const dc = region ?
            typeof SAUCE_REGIONS[region] !== 'undefined' ? SAUCE_REGIONS[region] : (region + '.') :
            '';
        return `${dc}saucelabs.com`;
    }
}
exports.Sauce = Sauce;
//# sourceMappingURL=sauce.js.map