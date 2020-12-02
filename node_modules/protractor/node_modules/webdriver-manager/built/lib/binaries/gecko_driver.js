"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const binary_1 = require("./binary");
const gecko_driver_github_1 = require("./gecko_driver_github");
class GeckoDriver extends binary_1.Binary {
    constructor(opt_alternativeCdn) {
        super(opt_alternativeCdn || config_1.Config.cdnUrls().gecko);
        this.configSource = new gecko_driver_github_1.GeckoDriverGithub();
        this.name = 'geckodriver';
        this.versionDefault = GeckoDriver.versionDefault;
        this.versionCustom = this.versionDefault;
    }
    id() {
        return GeckoDriver.id;
    }
    prefix() {
        return 'geckodriver-';
    }
    suffix() {
        if (this.ostype === 'Windows_NT') {
            return '.zip';
        }
        else {
            return '.tar.gz';
        }
    }
    getVersionList() {
        if (this.alternativeDownloadUrl != null) {
            return Promise.resolve([]);
        }
        else {
            return this.configSource.getVersionList();
        }
    }
}
GeckoDriver.id = 'gecko';
GeckoDriver.isDefault = true;
GeckoDriver.os = [binary_1.OS.Windows_NT, binary_1.OS.Linux, binary_1.OS.Darwin];
GeckoDriver.versionDefault = config_1.Config.binaryVersions().gecko;
GeckoDriver.suffixes = {
    'Darwin': { 'x64': '-macos.tar.gz' },
    'Linux': { 'x64': '-linux64.tar.gz', 'ia32': '-linux32.tar.gz' },
    'Windows_NT': {
        'x64': '-win64.zip',
        'ia32': '-win32.zip',
    }
};
exports.GeckoDriver = GeckoDriver;
//# sourceMappingURL=gecko_driver.js.map