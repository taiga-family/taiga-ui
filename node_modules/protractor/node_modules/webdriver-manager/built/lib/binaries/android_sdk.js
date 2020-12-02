"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const rimraf = require("rimraf");
const config_1 = require("../config");
const utils_1 = require("../utils");
const binary_1 = require("./binary");
function getAndroidArch() {
    switch (config_1.Config.osArch()) {
        case 'arm':
            return 'armeabi-v7a';
        case 'arm64':
            return 'arm64-v8a';
        case 'x86':
        case 'x32':
        case 'ia32':
        case 'ppc':
            return 'x86';
        case 'x86-64':
        case 'x64':
        case 'ia64':
        case 'ppc64':
            return 'x86_64';
        default:
            return config_1.Config.osArch();
    }
}
/**
 * The android sdk binary.
 */
class AndroidSDK extends binary_1.Binary {
    constructor(alternateCDN) {
        super(alternateCDN || config_1.Config.cdnUrls().android);
        this.name = 'android-sdk';
        this.versionCustom = AndroidSDK.versionDefault;
    }
    id() {
        return AndroidSDK.id;
    }
    prefix() {
        return 'android-sdk_r';
    }
    suffix() {
        if (this.ostype === 'Darwin') {
            return '-macosx.zip';
        }
        else if (this.ostype === 'Linux') {
            return '-linux.tgz';
        }
        else if (this.ostype === 'Windows_NT') {
            return '-windows.zip';
        }
    }
    getUrl() {
        return Promise.resolve({ url: this.cdn + this.filename(), version: this.versionCustom });
    }
    getVersionList() {
        return null;
    }
    url(ostype) {
        return this.cdn + this.filename();
    }
    zipContentName() {
        if (this.ostype === 'Darwin') {
            return this.name + '-macosx';
        }
        else if (this.ostype === 'Linux') {
            return this.name + '-linux';
        }
        else if (this.ostype === 'Windows_NT') {
            return this.name + '-windows';
        }
    }
    executableSuffix() {
        return '';
    }
    remove(sdkPath) {
        try {
            let avds = require(path.resolve(sdkPath, 'available_avds.json'));
            let version = path.basename(sdkPath).slice(this.prefix().length);
            avds.forEach((avd) => {
                utils_1.spawnSync(path.resolve(sdkPath, 'tools', 'android'), ['delete', 'avd', '-n', avd + '-v' + version + '-wd-manager']);
            });
        }
        catch (e) {
        }
        rimraf.sync(sdkPath);
    }
}
AndroidSDK.os = [binary_1.OS.Windows_NT, binary_1.OS.Linux, binary_1.OS.Darwin];
AndroidSDK.id = 'android';
AndroidSDK.versionDefault = config_1.Config.binaryVersions().android;
AndroidSDK.isDefault = false;
AndroidSDK.DEFAULT_API_LEVELS = '24';
AndroidSDK.DEFAULT_ARCHITECTURES = getAndroidArch();
AndroidSDK.DEFAULT_PLATFORMS = 'google_apis';
AndroidSDK.VERSIONS = {
    // Before 24 is not supported
    24: '7.0',
    25: '7.1'
};
exports.AndroidSDK = AndroidSDK;
//# sourceMappingURL=android_sdk.js.map