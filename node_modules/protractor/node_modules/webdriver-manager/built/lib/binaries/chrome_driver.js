"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const binary_1 = require("./binary");
const chrome_xml_1 = require("./chrome_xml");
class ChromeDriver extends binary_1.Binary {
    constructor(opt_alternativeCdn) {
        super(opt_alternativeCdn || config_1.Config.cdnUrls().chrome);
        this.configSource = new chrome_xml_1.ChromeXml();
        this.name = 'chromedriver';
        this.versionDefault = ChromeDriver.versionDefault;
        this.versionCustom = this.versionDefault;
    }
    id() {
        return ChromeDriver.id;
    }
    prefix() {
        return 'chromedriver_';
    }
    suffix() {
        return '.zip';
    }
    getVersionList() {
        // If an alternative cdn is set, return an empty list.
        if (this.alternativeDownloadUrl != null) {
            Promise.resolve([]);
        }
        else {
            return this.configSource.getVersionList();
        }
    }
}
ChromeDriver.id = 'chrome';
ChromeDriver.isDefault = true;
ChromeDriver.os = [binary_1.OS.Windows_NT, binary_1.OS.Linux, binary_1.OS.Darwin];
ChromeDriver.versionDefault = config_1.Config.binaryVersions().chrome;
exports.ChromeDriver = ChromeDriver;
//# sourceMappingURL=chrome_driver.js.map