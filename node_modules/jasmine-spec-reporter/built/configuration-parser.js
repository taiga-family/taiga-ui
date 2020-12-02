"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationParser = (function () {
    function ConfigurationParser() {
    }
    ConfigurationParser.parse = function (conf) {
        return ConfigurationParser.merge(ConfigurationParser.defaultConfiguration, conf);
    };
    ConfigurationParser.merge = function (template, override) {
        var result = {};
        for (var key in template) {
            if (template[key] instanceof Object
                && !(template[key] instanceof Array)
                && !(template[key] instanceof Function)
                && override instanceof Object
                && override[key] instanceof Object
                && !(override[key] instanceof Array)
                && !(override[key] instanceof Function)) {
                result[key] = ConfigurationParser.merge(template[key], override[key]);
            }
            else if (override instanceof Object
                && Object.keys(override).indexOf(key) !== -1) {
                result[key] = override[key];
            }
            else {
                result[key] = template[key];
            }
        }
        if (override instanceof Object && override.customOptions) {
            result.customOptions = override.customOptions;
        }
        return result;
    };
    ConfigurationParser.isWindows = process && process.platform === "win32";
    ConfigurationParser.defaultConfiguration = {
        colors: {
            enabled: true,
            failed: "red",
            pending: "yellow",
            successful: "green",
        },
        customProcessors: [],
        prefixes: {
            failed: ConfigurationParser.isWindows ? "\u00D7 " : "✗ ",
            pending: "* ",
            successful: ConfigurationParser.isWindows ? "\u221A " : "✓ ",
        },
        print: function (stuff) { return console.log(stuff); },
        spec: {
            displayDuration: false,
            displayErrorMessages: true,
            displayFailed: true,
            displayPending: false,
            displayStacktrace: false,
            displaySuccessful: true,
        },
        stacktrace: {
            filter: function (stacktrace) {
                var lines = stacktrace.split("\n");
                var filtered = [];
                for (var i = 1; i < lines.length; i++) {
                    if (!/(jasmine[^\/]*\.js|Timer\.listOnTimeout)/.test(lines[i])) {
                        filtered.push(lines[i]);
                    }
                }
                return filtered.join("\n");
            }
        },
        suite: {
            displayNumber: false,
        },
        summary: {
            displayDuration: true,
            displayErrorMessages: true,
            displayFailed: true,
            displayPending: true,
            displayStacktrace: false,
            displaySuccessful: false,
        },
    };
    return ConfigurationParser;
}());
exports.ConfigurationParser = ConfigurationParser;
//# sourceMappingURL=configuration-parser.js.map