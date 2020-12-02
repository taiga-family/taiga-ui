(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/logging/console_logger", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/logging/logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var logger_1 = require("@angular/compiler-cli/ngcc/src/logging/logger");
    var RESET = '\x1b[0m';
    var RED = '\x1b[31m';
    var YELLOW = '\x1b[33m';
    var BLUE = '\x1b[36m';
    exports.DEBUG = BLUE + "Debug:" + RESET;
    exports.WARN = YELLOW + "Warning:" + RESET;
    exports.ERROR = RED + "Error:" + RESET;
    /**
     * A simple logger that outputs directly to the Console.
     *
     * The log messages can be filtered based on severity via the `logLevel`
     * constructor parameter.
     */
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger(level) {
            this.level = level;
        }
        ConsoleLogger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.level <= logger_1.LogLevel.debug)
                console.debug.apply(console, tslib_1.__spread([exports.DEBUG], args));
        };
        ConsoleLogger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.level <= logger_1.LogLevel.info)
                console.info.apply(console, tslib_1.__spread(args));
        };
        ConsoleLogger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.level <= logger_1.LogLevel.warn)
                console.warn.apply(console, tslib_1.__spread([exports.WARN], args));
        };
        ConsoleLogger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.level <= logger_1.LogLevel.error)
                console.error.apply(console, tslib_1.__spread([exports.ERROR], args));
        };
        return ConsoleLogger;
    }());
    exports.ConsoleLogger = ConsoleLogger;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZV9sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9zcmMvbG9nZ2luZy9jb25zb2xlX2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCx3RUFBMEM7SUFFMUMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUN2QixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDMUIsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBRVgsUUFBQSxLQUFLLEdBQU0sSUFBSSxjQUFTLEtBQU8sQ0FBQztJQUNoQyxRQUFBLElBQUksR0FBTSxNQUFNLGdCQUFXLEtBQU8sQ0FBQztJQUNuQyxRQUFBLEtBQUssR0FBTSxHQUFHLGNBQVMsS0FBTyxDQUFDO0lBRTVDOzs7OztPQUtHO0lBQ0g7UUFDRSx1QkFBbUIsS0FBZTtZQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFBRyxDQUFDO1FBQ3RDLDZCQUFLLEdBQUw7WUFBTSxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxpQkFBUSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLG9CQUFPLGFBQUssR0FBSyxJQUFJLEdBQUU7UUFDbEUsQ0FBQztRQUNELDRCQUFJLEdBQUo7WUFBSyxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxpQkFBUSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtRQUN6RCxDQUFDO1FBQ0QsNEJBQUksR0FBSjtZQUFLLGNBQWlCO2lCQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7Z0JBQWpCLHlCQUFpQjs7WUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGlCQUFRLENBQUMsSUFBSTtnQkFBRSxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sb0JBQU0sWUFBSSxHQUFLLElBQUksR0FBRTtRQUMvRCxDQUFDO1FBQ0QsNkJBQUssR0FBTDtZQUFNLGNBQWlCO2lCQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7Z0JBQWpCLHlCQUFpQjs7WUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLGlCQUFRLENBQUMsS0FBSztnQkFBRSxPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sb0JBQU8sYUFBSyxHQUFLLElBQUksR0FBRTtRQUNsRSxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQUFDLEFBZEQsSUFjQztJQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtMb2dnZXIsIExvZ0xldmVsfSBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IFJFU0VUID0gJ1xceDFiWzBtJztcbmNvbnN0IFJFRCA9ICdcXHgxYlszMW0nO1xuY29uc3QgWUVMTE9XID0gJ1xceDFiWzMzbSc7XG5jb25zdCBCTFVFID0gJ1xceDFiWzM2bSc7XG5cbmV4cG9ydCBjb25zdCBERUJVRyA9IGAke0JMVUV9RGVidWc6JHtSRVNFVH1gO1xuZXhwb3J0IGNvbnN0IFdBUk4gPSBgJHtZRUxMT1d9V2FybmluZzoke1JFU0VUfWA7XG5leHBvcnQgY29uc3QgRVJST1IgPSBgJHtSRUR9RXJyb3I6JHtSRVNFVH1gO1xuXG4vKipcbiAqIEEgc2ltcGxlIGxvZ2dlciB0aGF0IG91dHB1dHMgZGlyZWN0bHkgdG8gdGhlIENvbnNvbGUuXG4gKlxuICogVGhlIGxvZyBtZXNzYWdlcyBjYW4gYmUgZmlsdGVyZWQgYmFzZWQgb24gc2V2ZXJpdHkgdmlhIHRoZSBgbG9nTGV2ZWxgXG4gKiBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IocHVibGljIGxldmVsOiBMb2dMZXZlbCkge31cbiAgZGVidWcoLi4uYXJnczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5sZXZlbCA8PSBMb2dMZXZlbC5kZWJ1ZykgY29uc29sZS5kZWJ1ZyhERUJVRywgLi4uYXJncyk7XG4gIH1cbiAgaW5mbyguLi5hcmdzOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmxldmVsIDw9IExvZ0xldmVsLmluZm8pIGNvbnNvbGUuaW5mbyguLi5hcmdzKTtcbiAgfVxuICB3YXJuKC4uLmFyZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPD0gTG9nTGV2ZWwud2FybikgY29uc29sZS53YXJuKFdBUk4sIC4uLmFyZ3MpO1xuICB9XG4gIGVycm9yKC4uLmFyZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPD0gTG9nTGV2ZWwuZXJyb3IpIGNvbnNvbGUuZXJyb3IoRVJST1IsIC4uLmFyZ3MpO1xuICB9XG59XG4iXX0=