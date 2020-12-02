"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginLicensePolicy = /** @class */ (function () {
    function PluginLicensePolicy(licenseTester, unacceptableLicenseTester, unacceptableLicenseHandler, missingLicenseTextHandler) {
        this.licenseTester = licenseTester;
        this.unacceptableLicenseTester = unacceptableLicenseTester;
        this.unacceptableLicenseHandler = unacceptableLicenseHandler;
        this.missingLicenseTextHandler = missingLicenseTextHandler;
    }
    PluginLicensePolicy.prototype.isLicenseWrittenFor = function (licenseType) {
        return this.licenseTester.test(licenseType);
    };
    PluginLicensePolicy.prototype.isLicenseUnacceptableFor = function (licenseType) {
        return this.unacceptableLicenseTester.test(licenseType);
    };
    PluginLicensePolicy.prototype.handleUnacceptableLicense = function (packageName, licenseType) {
        this.unacceptableLicenseHandler(packageName, licenseType);
    };
    PluginLicensePolicy.prototype.handleMissingLicenseText = function (packageName, licenseType) {
        this.missingLicenseTextHandler(packageName, licenseType);
    };
    return PluginLicensePolicy;
}());
exports.PluginLicensePolicy = PluginLicensePolicy;
