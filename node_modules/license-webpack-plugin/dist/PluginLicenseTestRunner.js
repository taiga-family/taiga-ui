"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginLicenseTestRunner = /** @class */ (function () {
    function PluginLicenseTestRunner(licenseTest) {
        this.licenseTest = licenseTest;
    }
    PluginLicenseTestRunner.prototype.test = function (licenseId) {
        return this.licenseTest(licenseId);
    };
    return PluginLicenseTestRunner;
}());
exports.PluginLicenseTestRunner = PluginLicenseTestRunner;
