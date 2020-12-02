"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *  This is an implementation of the Direct Driver Provider.
 *  It is responsible for setting up the account object, tearing
 *  it down, and setting up the driver correctly.
 */
const fs = require("fs");
const path = require("path");
const q = require("q");
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
const exitCodes_1 = require("../exitCodes");
const logger_1 = require("../logger");
const driverProvider_1 = require("./driverProvider");
const SeleniumConfig = require('webdriver-manager/built/lib/config').Config;
let logger = new logger_1.Logger('direct');
class Direct extends driverProvider_1.DriverProvider {
    constructor(config) {
        super(config);
    }
    /**
     * Configure and launch (if applicable) the object's environment.
     * @return {q.promise} A promise which will resolve when the environment is
     *     ready to test.
     */
    setupDriverEnv() {
        switch (this.config_.capabilities.browserName) {
            case 'chrome':
                logger.info('Using ChromeDriver directly...');
                break;
            case 'firefox':
                logger.info('Using FirefoxDriver directly...');
                break;
            default:
                throw new exitCodes_1.BrowserError(logger, 'browserName ' + this.config_.capabilities.browserName +
                    ' is not supported with directConnect.');
        }
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
        let driver;
        switch (this.config_.capabilities.browserName) {
            case 'chrome':
                let chromeDriverFile;
                if (this.config_.chromeDriver) {
                    chromeDriverFile = this.config_.chromeDriver;
                }
                else {
                    try {
                        let updateJson = path.resolve(SeleniumConfig.getSeleniumDir(), 'update-config.json');
                        let updateConfig = JSON.parse(fs.readFileSync(updateJson).toString());
                        chromeDriverFile = updateConfig.chrome.last;
                    }
                    catch (e) {
                        throw new exitCodes_1.BrowserError(logger, 'Could not find update-config.json. ' +
                            'Run \'webdriver-manager update\' to download binaries.');
                    }
                }
                if (!fs.existsSync(chromeDriverFile)) {
                    throw new exitCodes_1.BrowserError(logger, 'Could not find chromedriver at ' + chromeDriverFile +
                        '. Run \'webdriver-manager update\' to download binaries.');
                }
                let chromeService = new chrome_1.ServiceBuilder(chromeDriverFile).build();
                // driver = ChromeDriver.createSession(new Capabilities(this.config_.capabilities),
                // chromeService);
                // TODO(ralphj): fix typings
                driver =
                    require('selenium-webdriver/chrome')
                        .Driver.createSession(new selenium_webdriver_1.Capabilities(this.config_.capabilities), chromeService);
                break;
            case 'firefox':
                let geckoDriverFile;
                if (this.config_.geckoDriver) {
                    geckoDriverFile = this.config_.geckoDriver;
                }
                else {
                    try {
                        let updateJson = path.resolve(SeleniumConfig.getSeleniumDir(), 'update-config.json');
                        let updateConfig = JSON.parse(fs.readFileSync(updateJson).toString());
                        geckoDriverFile = updateConfig.gecko.last;
                    }
                    catch (e) {
                        throw new exitCodes_1.BrowserError(logger, 'Could not find update-config.json. ' +
                            'Run \'webdriver-manager update\' to download binaries.');
                    }
                }
                if (!fs.existsSync(geckoDriverFile)) {
                    throw new exitCodes_1.BrowserError(logger, 'Could not find geckodriver at ' + geckoDriverFile +
                        '. Run \'webdriver-manager update\' to download binaries.');
                }
                // TODO (mgiambalvo): Turn this into an import when the selenium typings are updated.
                const FirefoxServiceBuilder = require('selenium-webdriver/firefox').ServiceBuilder;
                let firefoxService = new FirefoxServiceBuilder(geckoDriverFile).build();
                // TODO(mgiambalvo): Fix typings.
                driver =
                    require('selenium-webdriver/firefox')
                        .Driver.createSession(new selenium_webdriver_1.Capabilities(this.config_.capabilities), firefoxService);
                break;
            default:
                throw new exitCodes_1.BrowserError(logger, 'browserName ' + this.config_.capabilities.browserName +
                    ' is not supported with directConnect.');
        }
        this.drivers_.push(driver);
        return driver;
    }
}
exports.Direct = Direct;
//# sourceMappingURL=direct.js.map