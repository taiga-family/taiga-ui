"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const cli_1 = require("./cli");
let logger = new cli_1.Logger('config');
/**
 * The configuration for webdriver-manager
 *
 * The config.json, package.json, and selenium directory are found in the
 * same location at the root directory in webdriver-manager.
 *
 */
class Config {
    static osArch() {
        return Config.osArch_;
    }
    static osType() {
        return Config.osType_;
    }
    static noProxy() {
        return Config.noProxy_;
    }
    static httpProxy() {
        return Config.httpProxy_;
    }
    static httpsProxy() {
        return Config.httpsProxy_;
    }
    static getConfigFile_() {
        return path.resolve(Config.dir, '..', Config.configFile);
    }
    static getPackageFile_() {
        return path.resolve(Config.dir, '..', Config.packageFile);
    }
    static getSeleniumDir() {
        return path.resolve(Config.dir, '..', '..', 'selenium/');
    }
    static getBaseDir() {
        return path.resolve(Config.dir, '..', '..');
    }
    /**
     * Get the binary versions from the configuration file.
     * @returns A map of the versions defined in the configuration file.
     */
    static binaryVersions() {
        let configFile = require(Config.getConfigFile_());
        let configVersions = {};
        configVersions.selenium = configFile.webdriverVersions.selenium;
        configVersions.chrome = configFile.webdriverVersions.chromedriver;
        configVersions.gecko = configFile.webdriverVersions.geckodriver;
        configVersions.ie = configFile.webdriverVersions.iedriver;
        configVersions.android = configFile.webdriverVersions.androidsdk;
        configVersions.appium = configFile.webdriverVersions.appium;
        configVersions.maxChrome = configFile.webdriverVersions.maxChromedriver;
        return configVersions;
    }
    /**
     * Get the CDN urls from the configuration file.
     * @returns A map of the CDN versions defined in the configuration file.
     */
    static cdnUrls() {
        let configFile = require(Config.getConfigFile_());
        let configCdnUrls = {};
        configCdnUrls.selenium = configFile.cdnUrls.selenium;
        configCdnUrls.chrome = configFile.cdnUrls.chromedriver;
        configCdnUrls.gecko = configFile.cdnUrls.geckodriver;
        configCdnUrls.ie = configFile.cdnUrls.iedriver;
        configCdnUrls.android = configFile.cdnUrls.androidsdk;
        return configCdnUrls;
    }
    /**
     * Get the package version.
     */
    static getVersion() {
        let packageFile = require(Config.getPackageFile_());
        return packageFile.version;
    }
}
Config.configFile = 'config.json';
Config.packageFile = 'package.json';
Config.nodeModuleName = 'webdriver-manager';
Config.cwd = process.cwd();
Config.parentPath = path.resolve(Config.cwd, '..');
Config.dir = __dirname;
Config.folder = Config.cwd.replace(Config.parentPath, '').substring(1);
Config.isProjectVersion = Config.folder === Config.nodeModuleName;
Config.isLocalVersion = false;
Config.osArch_ = os.arch();
Config.osType_ = os.type();
Config.noProxy_ = process.env.NO_PROXY || process.env.no_proxy;
Config.httpsProxy_ = process.env.HTTPS_PROXY || process.env.https_proxy;
Config.httpProxy_ = process.env.HTTP_PROXY || process.env.http_proxy;
exports.Config = Config;
//# sourceMappingURL=config.js.map