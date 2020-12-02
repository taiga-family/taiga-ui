"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const semver = require("semver");
const config_1 = require("../config");
const config_source_1 = require("./config_source");
class IEDriverXml extends config_source_1.XmlConfigSource {
    constructor() {
        super('iedriver', config_1.Config.cdnUrls()['ie']);
    }
    getUrl(version) {
        if (version === 'latest') {
            return this.getLatestIEDriverVersion();
        }
        else {
            return this.getSpecificIEDriverVersion(version);
        }
    }
    getVersionList() {
        return this.getXml().then(xml => {
            let versionPaths = [];
            for (let content of xml.ListBucketResult.Contents) {
                let contentKey = content.Key[0];
                // Filter For IEDriverServer win 32. Removing option to download x64
                if (contentKey.includes('IEDriverServer_Win32_')) {
                    versionPaths.push(contentKey);
                }
            }
            return versionPaths;
        });
    }
    getLatestIEDriverVersion() {
        return this.getVersionList().then(list => {
            let latestVersion = null;
            let latest = '';
            for (let item of list) {
                // Get a semantic version.
                let version = item.split('IEDriverServer_Win32_')[1].replace('.zip', '');
                if (latestVersion == null) {
                    // First time: use the version found.
                    latestVersion = version;
                    latest = item;
                }
                else if (semver.gt(version, latestVersion)) {
                    // Get the latest.
                    latestVersion = version;
                    latest = item;
                }
            }
            return { url: config_1.Config.cdnUrls().ie + latest, version: latestVersion };
        });
    }
    getSpecificIEDriverVersion(inputVersion) {
        return this.getVersionList().then(list => {
            let itemFound = '';
            for (let item of list) {
                // Get a semantic version.
                let version = item.split('IEDriverServer_Win32_')[1].replace('.zip', '');
                // Check to see if the specified version matches.
                let firstPath = item.split('/')[0];
                if (version === inputVersion) {
                    return { url: config_1.Config.cdnUrls().ie + item, version: version };
                }
            }
            return { url: '', version: inputVersion };
        });
    }
}
exports.IEDriverXml = IEDriverXml;
//# sourceMappingURL=iedriver_xml.js.map