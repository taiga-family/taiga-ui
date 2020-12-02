"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const binary_1 = require("./binary");
const standalone_xml_1 = require("./standalone_xml");
class Standalone extends binary_1.Binary {
    constructor(opt_alternativeCdn) {
        super(opt_alternativeCdn || config_1.Config.cdnUrls().selenium);
        this.configSource = new standalone_xml_1.StandaloneXml();
        this.name = 'selenium standalone';
        this.versionDefault = Standalone.versionDefault;
        this.versionCustom = this.versionDefault;
    }
    id() {
        return Standalone.id;
    }
    prefix() {
        return 'selenium-server-standalone-';
    }
    suffix() {
        return '.jar';
    }
    executableSuffix() {
        return '.jar';
    }
    getVersionList() {
        // If an alternative cdn is set, return an empty list.
        if (this.alternativeDownloadUrl != null) {
            return Promise.resolve([]);
        }
        else {
            return this.configSource.getVersionList();
        }
    }
}
Standalone.id = 'standalone';
Standalone.isDefault = true;
Standalone.os = [binary_1.OS.Windows_NT, binary_1.OS.Linux, binary_1.OS.Darwin];
Standalone.versionDefault = config_1.Config.binaryVersions().selenium;
exports.Standalone = Standalone;
//# sourceMappingURL=standalone.js.map