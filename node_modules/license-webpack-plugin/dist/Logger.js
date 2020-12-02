"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(stats) {
        this.stats = stats;
    }
    Logger.prototype.warn = function (compilation, message) {
        if (this.stats.warnings) {
            compilation.warnings.push("" + Logger.LOG_PREFIX + message);
        }
    };
    Logger.prototype.error = function (compilation, message) {
        if (this.stats.errors) {
            compilation.errors.push("" + Logger.LOG_PREFIX + message);
        }
    };
    Logger.LOG_PREFIX = 'license-webpack-plugin: ';
    return Logger;
}());
exports.Logger = Logger;
