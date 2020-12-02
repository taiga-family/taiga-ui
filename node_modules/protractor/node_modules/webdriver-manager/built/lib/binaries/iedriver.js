"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const binary_1 = require("./binary");
const iedriver_xml_1 = require("./iedriver_xml");
class IEDriver extends binary_1.Binary {
    constructor(opt_alternativeCdn) {
        super(opt_alternativeCdn || config_1.Config.cdnUrls().ie);
        this.configSource = new iedriver_xml_1.IEDriverXml();
        this.name = 'IEDriverServer';
        this.versionDefault = IEDriver.versionDefault;
        this.versionCustom = this.versionDefault;
    }
    id() {
        return IEDriver.id;
    }
    prefix() {
        return 'IEDriverServer';
    }
    suffix() {
        return '.zip';
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
IEDriver.id = 'ie';
IEDriver.isDefault32 = false;
IEDriver.isDefault64 = false;
IEDriver.os = [binary_1.OS.Windows_NT];
IEDriver.versionDefault = config_1.Config.binaryVersions().ie;
exports.IEDriver = IEDriver;
//# sourceMappingURL=iedriver.js.map