#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/main-ngcc", ["require", "exports", "tslib", "@angular/compiler-cli/ngcc/src/main", "@angular/compiler-cli/ngcc/src/command_line_options"], factory);
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
    var main_1 = require("@angular/compiler-cli/ngcc/src/main");
    var command_line_options_1 = require("@angular/compiler-cli/ngcc/src/command_line_options");
    // CLI entry point
    if (require.main === module) {
        process.title = 'ngcc';
        var startTime_1 = Date.now();
        var options_1 = command_line_options_1.parseCommandLineOptions(process.argv.slice(2));
        (function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var duration, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, main_1.mainNgcc(options_1)];
                    case 1:
                        _a.sent();
                        if (options_1.logger) {
                            duration = Math.round((Date.now() - startTime_1) / 1000);
                            options_1.logger.debug("Run ngcc in " + duration + "s.");
                        }
                        process.exitCode = 0;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1.stack || e_1.message);
                        process.exit(1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1uZ2NjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2MvbWFpbi1uZ2NjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFDQTs7Ozs7O09BTUc7SUFDSCw0REFBb0M7SUFDcEMsNEZBQW1FO0lBRW5FLGtCQUFrQjtJQUNsQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQU0sV0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFNLFNBQU8sR0FBRyw4Q0FBdUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7Ozs7Ozt3QkFFRyxxQkFBTSxlQUFRLENBQUMsU0FBTyxDQUFDLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDO3dCQUN4QixJQUFJLFNBQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQ1osUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsV0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7NEJBQzdELFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFlLFFBQVEsT0FBSSxDQUFDLENBQUM7eUJBQ25EO3dCQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O3dCQUVyQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxLQUFLLElBQUksR0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OzthQUVuQixDQUFDLEVBQUUsQ0FBQztLQUNOIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHttYWluTmdjY30gZnJvbSAnLi9zcmMvbWFpbic7XG5pbXBvcnQge3BhcnNlQ29tbWFuZExpbmVPcHRpb25zfSBmcm9tICcuL3NyYy9jb21tYW5kX2xpbmVfb3B0aW9ucyc7XG5cbi8vIENMSSBlbnRyeSBwb2ludFxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIHByb2Nlc3MudGl0bGUgPSAnbmdjYyc7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBwYXJzZUNvbW1hbmRMaW5lT3B0aW9ucyhwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xuICAoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBtYWluTmdjYyhvcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLmxvZ2dlcikge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGgucm91bmQoKERhdGUubm93KCkgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG4gICAgICAgIG9wdGlvbnMubG9nZ2VyLmRlYnVnKGBSdW4gbmdjYyBpbiAke2R1cmF0aW9ufXMuYCk7XG4gICAgICB9XG4gICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2sgfHwgZS5tZXNzYWdlKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG4gIH0pKCk7XG59XG4iXX0=