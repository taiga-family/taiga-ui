"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../angular/config");
var Logger = (function () {
    function Logger(level) {
        this.level = level;
    }
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (this.level & config_1.LogLevel.Error) {
            console.error.apply(console, [msg]);
        }
    };
    Logger.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (this.level && config_1.LogLevel.Info) {
            console.info.apply(console, [msg]);
        }
    };
    Logger.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (this.level && config_1.LogLevel.Debug) {
            console.log.apply(console, [msg]);
        }
    };
    return Logger;
}());
exports.Logger = Logger;
exports.logger = new Logger(config_1.Config.logLevel);
