"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const config_1 = require("../config");
/**
 * operating system enum
 */
var OS;
(function (OS) {
    OS[OS["Windows_NT"] = 0] = "Windows_NT";
    OS[OS["Linux"] = 1] = "Linux";
    OS[OS["Darwin"] = 2] = "Darwin";
})(OS = exports.OS || (exports.OS = {}));
class Binary {
    constructor(opt_alternativeCdn) {
        this.ostype = config_1.Config.osType();
        this.osarch = config_1.Config.osArch();
        this.cdn = opt_alternativeCdn;
    }
    executableSuffix() {
        if (this.ostype == 'Windows_NT') {
            return '.exe';
        }
        else {
            return '';
        }
    }
    version() {
        return this.versionCustom;
    }
    filename() {
        return this.prefix() + this.version() + this.suffix();
    }
    /**
     * @param ostype The operating system.
     * @returns The file name for the executable.
     */
    executableFilename() {
        return this.prefix() + this.version() + this.executableSuffix();
    }
    /**
     * Gets the url to download the file set by the version. This will use the XML if available.
     * If not, it will download from an existing url.
     *
     * @param {string} version The version we are looking for. This could also be 'latest'.
     */
    getUrl(version) {
        if (this.alternativeDownloadUrl != null) {
            return Promise.resolve({ url: '', version: '' });
        }
        else {
            return this.getVersionList().then(() => {
                version = version || config_1.Config.binaryVersions()[this.id()];
                return this.configSource.getUrl(version).then(binaryUrl => {
                    this.versionCustom = binaryUrl.version;
                    return { url: binaryUrl.url, version: binaryUrl.version };
                });
            });
        }
    }
    /**
     * Delete an instance of this binary from the file system
     */
    remove(filename) {
        fs.unlinkSync(filename);
    }
    /**
     * @param ostype The operating system.
     * @returns The file name for the file inside the downloaded zip file
     */
    zipContentName() {
        return this.name + this.executableSuffix();
    }
}
exports.Binary = Binary;
//# sourceMappingURL=binary.js.map