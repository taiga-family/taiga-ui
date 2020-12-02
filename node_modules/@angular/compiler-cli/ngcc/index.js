(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc", ["require", "exports", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/ngcc/src/main", "@angular/compiler-cli/ngcc/src/logging/console_logger", "@angular/compiler-cli/ngcc/src/logging/logger", "@angular/compiler-cli/ngcc/src/ngcc_options"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var main_1 = require("@angular/compiler-cli/ngcc/src/main");
    var console_logger_1 = require("@angular/compiler-cli/ngcc/src/logging/console_logger");
    exports.ConsoleLogger = console_logger_1.ConsoleLogger;
    var logger_1 = require("@angular/compiler-cli/ngcc/src/logging/logger");
    exports.LogLevel = logger_1.LogLevel;
    var ngcc_options_1 = require("@angular/compiler-cli/ngcc/src/ngcc_options");
    exports.clearTsConfigCache = ngcc_options_1.clearTsConfigCache;
    function process(options) {
        file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
        return main_1.mainNgcc(options);
    }
    exports.process = process;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvbmdjYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUF5RTtJQUV6RSw0REFBb0M7SUFHcEMsd0ZBQTJEO0lBQW5ELHlDQUFBLGFBQWEsQ0FBQTtJQUNyQix3RUFBc0Q7SUFBdEMsNEJBQUEsUUFBUSxDQUFBO0lBQ3hCLDRFQUFzRztJQUE1RSw0Q0FBQSxrQkFBa0IsQ0FBQTtJQUs1QyxTQUFnQixPQUFPLENBQUMsT0FBb0I7UUFDMUMsMkJBQWEsQ0FBQyxJQUFJLDhCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN0QyxPQUFPLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBSEQsMEJBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge05vZGVKU0ZpbGVTeXN0ZW0sIHNldEZpbGVTeXN0ZW19IGZyb20gJy4uL3NyYy9uZ3RzYy9maWxlX3N5c3RlbSc7XG5cbmltcG9ydCB7bWFpbk5nY2N9IGZyb20gJy4vc3JjL21haW4nO1xuaW1wb3J0IHtBc3luY05nY2NPcHRpb25zLCBOZ2NjT3B0aW9ucywgU3luY05nY2NPcHRpb25zfSBmcm9tICcuL3NyYy9uZ2NjX29wdGlvbnMnO1xuXG5leHBvcnQge0NvbnNvbGVMb2dnZXJ9IGZyb20gJy4vc3JjL2xvZ2dpbmcvY29uc29sZV9sb2dnZXInO1xuZXhwb3J0IHtMb2dnZXIsIExvZ0xldmVsfSBmcm9tICcuL3NyYy9sb2dnaW5nL2xvZ2dlcic7XG5leHBvcnQge0FzeW5jTmdjY09wdGlvbnMsIGNsZWFyVHNDb25maWdDYWNoZSwgTmdjY09wdGlvbnMsIFN5bmNOZ2NjT3B0aW9uc30gZnJvbSAnLi9zcmMvbmdjY19vcHRpb25zJztcbmV4cG9ydCB7UGF0aE1hcHBpbmdzfSBmcm9tICcuL3NyYy9wYXRoX21hcHBpbmdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Mob3B0aW9uczogQXN5bmNOZ2NjT3B0aW9ucyk6IFByb21pc2U8dm9pZD47XG5leHBvcnQgZnVuY3Rpb24gcHJvY2VzcyhvcHRpb25zOiBTeW5jTmdjY09wdGlvbnMpOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3Mob3B0aW9uczogTmdjY09wdGlvbnMpOiB2b2lkfFByb21pc2U8dm9pZD4ge1xuICBzZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuICByZXR1cm4gbWFpbk5nY2Mob3B0aW9ucyk7XG59XG4iXX0=