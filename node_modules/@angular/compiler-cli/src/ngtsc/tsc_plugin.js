/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/tsc_plugin", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/core", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/perf"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@angular/compiler-cli/src/ngtsc/core");
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var perf_1 = require("@angular/compiler-cli/src/ngtsc/perf");
    /**
     * A plugin for `tsc_wrapped` which allows Angular compilation from a plain `ts_library`.
     */
    var NgTscPlugin = /** @class */ (function () {
        function NgTscPlugin(ngOptions) {
            this.ngOptions = ngOptions;
            this.name = 'ngtsc';
            this.options = null;
            this.host = null;
            this._compiler = null;
            file_system_1.setFileSystem(new file_system_1.NodeJSFileSystem());
        }
        Object.defineProperty(NgTscPlugin.prototype, "compiler", {
            get: function () {
                if (this._compiler === null) {
                    throw new Error('Lifecycle error: setupCompilation() must be called first.');
                }
                return this._compiler;
            },
            enumerable: true,
            configurable: true
        });
        NgTscPlugin.prototype.wrapHost = function (host, inputFiles, options) {
            this.options = tslib_1.__assign(tslib_1.__assign({}, this.ngOptions), options);
            this.host = core_1.NgCompilerHost.wrap(host, inputFiles, this.options);
            return this.host;
        };
        NgTscPlugin.prototype.setupCompilation = function (program, oldProgram) {
            if (this.host === null || this.options === null) {
                throw new Error('Lifecycle error: setupCompilation() before wrapHost().');
            }
            this._compiler =
                new core_1.NgCompiler(this.host, this.options, program, oldProgram, perf_1.NOOP_PERF_RECORDER);
            return {
                ignoreForDiagnostics: this._compiler.ignoreForDiagnostics,
                ignoreForEmit: this._compiler.ignoreForEmit,
            };
        };
        NgTscPlugin.prototype.getDiagnostics = function (file) {
            return this.compiler.getDiagnostics(file);
        };
        NgTscPlugin.prototype.getOptionDiagnostics = function () {
            return this.compiler.getOptionDiagnostics();
        };
        NgTscPlugin.prototype.getNextProgram = function () {
            return this.compiler.getNextProgram();
        };
        NgTscPlugin.prototype.createTransformers = function () {
            return this.compiler.prepareEmit().transformers;
        };
        return NgTscPlugin;
    }());
    exports.NgTscPlugin = NgTscPlugin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNjX3BsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHNjX3BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFJSCw2REFBa0Q7SUFFbEQsMkVBQThEO0lBQzlELDZEQUEwQztJQTJDMUM7O09BRUc7SUFDSDtRQWNFLHFCQUFvQixTQUFhO1lBQWIsY0FBUyxHQUFULFNBQVMsQ0FBSTtZQWJqQyxTQUFJLEdBQUcsT0FBTyxDQUFDO1lBRVAsWUFBTyxHQUEyQixJQUFJLENBQUM7WUFDdkMsU0FBSSxHQUF3QixJQUFJLENBQUM7WUFDakMsY0FBUyxHQUFvQixJQUFJLENBQUM7WUFVeEMsMkJBQWEsQ0FBQyxJQUFJLDhCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBVEQsc0JBQUksaUNBQVE7aUJBQVo7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2lCQUM5RTtnQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsQ0FBQzs7O1dBQUE7UUFNRCw4QkFBUSxHQUFSLFVBQ0ksSUFBd0MsRUFBRSxVQUE2QixFQUN2RSxPQUEyQjtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLHNDQUFJLElBQUksQ0FBQyxTQUFTLEdBQUssT0FBTyxDQUFzQixDQUFDO1lBQ3BFLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7UUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBbUIsRUFBRSxVQUF1QjtZQUkzRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLENBQUMsU0FBUztnQkFDVixJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUseUJBQWtCLENBQUMsQ0FBQztZQUNyRixPQUFPO2dCQUNMLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CO2dCQUN6RCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO2FBQzVDLENBQUM7UUFDSixDQUFDO1FBRUQsb0NBQWMsR0FBZCxVQUFlLElBQW9CO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELDBDQUFvQixHQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFFRCxvQ0FBYyxHQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFFRCx3Q0FBa0IsR0FBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ2xELENBQUM7UUFDSCxrQkFBQztJQUFELENBQUMsQUF4REQsSUF3REM7SUF4RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge05nQ29tcGlsZXIsIE5nQ29tcGlsZXJIb3N0fSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtOZ0NvbXBpbGVyT3B0aW9ucywgVW5pZmllZE1vZHVsZXNIb3N0fSBmcm9tICcuL2NvcmUvYXBpJztcbmltcG9ydCB7Tm9kZUpTRmlsZVN5c3RlbSwgc2V0RmlsZVN5c3RlbX0gZnJvbSAnLi9maWxlX3N5c3RlbSc7XG5pbXBvcnQge05PT1BfUEVSRl9SRUNPUkRFUn0gZnJvbSAnLi9wZXJmJztcblxuLy8gVGhlIGZvbGxvd2luZyBpcyBuZWVkZWQgdG8gZml4IGEgdGhlIGNoaWNrZW4tYW5kLWVnZyBpc3N1ZSB3aGVyZSB0aGUgc3luYyAoaW50byBnMykgc2NyaXB0IHdpbGxcbi8vIHJlZnVzZSB0byBhY2NlcHQgdGhpcyBmaWxlIHVubGVzcyB0aGUgZm9sbG93aW5nIHN0cmluZyBhcHBlYXJzOlxuLy8gaW1wb3J0ICogYXMgcGx1Z2luIGZyb20gJ0BiYXplbC90eXBlc2NyaXB0L2ludGVybmFsL3RzY193cmFwcGVkL3BsdWdpbl9hcGknO1xuXG4vKipcbiAqIEEgYHRzLkNvbXBpbGVySG9zdGAgd2hpY2ggYWxzbyByZXR1cm5zIGEgbGlzdCBvZiBpbnB1dCBmaWxlcywgb3V0IG9mIHdoaWNoIHRoZSBgdHMuUHJvZ3JhbWBcbiAqIHNob3VsZCBiZSBjcmVhdGVkLlxuICpcbiAqIEN1cnJlbnRseSBtaXJyb3JlZCBmcm9tIEBiYXplbC90eXBlc2NyaXB0L2ludGVybmFsL3RzY193cmFwcGVkL3BsdWdpbl9hcGkgKHdpdGggdGhlIG5hbWluZyBvZlxuICogYGZpbGVOYW1lVG9Nb2R1bGVOYW1lYCBjb3JyZWN0ZWQpLlxuICovXG5pbnRlcmZhY2UgUGx1Z2luQ29tcGlsZXJIb3N0IGV4dGVuZHMgdHMuQ29tcGlsZXJIb3N0LCBQYXJ0aWFsPFVuaWZpZWRNb2R1bGVzSG9zdD4ge1xuICByZWFkb25seSBpbnB1dEZpbGVzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59XG5cbi8qKlxuICogTWlycm9ycyB0aGUgcGx1Z2luIGludGVyZmFjZSBmcm9tIHRzY193cmFwcGVkIHdoaWNoIGlzIGN1cnJlbnRseSB1bmRlciBhY3RpdmUgZGV2ZWxvcG1lbnQuIFRvXG4gKiBlbmFibGUgcHJvZ3Jlc3MgdG8gYmUgbWFkZSBpbiBwYXJhbGxlbCwgdGhlIHVwc3RyZWFtIGludGVyZmFjZSBpc24ndCBpbXBsZW1lbnRlZCBkaXJlY3RseS5cbiAqIEluc3RlYWQsIGBUc2NQbHVnaW5gIGhlcmUgaXMgc3RydWN0dXJhbGx5IGFzc2lnbmFibGUgdG8gd2hhdCB0c2Nfd3JhcHBlZCBleHBlY3RzLlxuICovXG5pbnRlcmZhY2UgVHNjUGx1Z2luIHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIHdyYXBIb3N0KFxuICAgICAgaG9zdDogdHMuQ29tcGlsZXJIb3N0JlBhcnRpYWw8VW5pZmllZE1vZHVsZXNIb3N0PiwgaW5wdXRGaWxlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+LFxuICAgICAgb3B0aW9uczogdHMuQ29tcGlsZXJPcHRpb25zKTogUGx1Z2luQ29tcGlsZXJIb3N0O1xuXG4gIHNldHVwQ29tcGlsYXRpb24ocHJvZ3JhbTogdHMuUHJvZ3JhbSwgb2xkUHJvZ3JhbT86IHRzLlByb2dyYW0pOiB7XG4gICAgaWdub3JlRm9yRGlhZ25vc3RpY3M6IFNldDx0cy5Tb3VyY2VGaWxlPixcbiAgICBpZ25vcmVGb3JFbWl0OiBTZXQ8dHMuU291cmNlRmlsZT4sXG4gIH07XG5cbiAgZ2V0RGlhZ25vc3RpY3MoZmlsZT86IHRzLlNvdXJjZUZpbGUpOiB0cy5EaWFnbm9zdGljW107XG5cbiAgZ2V0T3B0aW9uRGlhZ25vc3RpY3MoKTogdHMuRGlhZ25vc3RpY1tdO1xuXG4gIGdldE5leHRQcm9ncmFtKCk6IHRzLlByb2dyYW07XG5cbiAgY3JlYXRlVHJhbnNmb3JtZXJzKCk6IHRzLkN1c3RvbVRyYW5zZm9ybWVycztcbn1cblxuLyoqXG4gKiBBIHBsdWdpbiBmb3IgYHRzY193cmFwcGVkYCB3aGljaCBhbGxvd3MgQW5ndWxhciBjb21waWxhdGlvbiBmcm9tIGEgcGxhaW4gYHRzX2xpYnJhcnlgLlxuICovXG5leHBvcnQgY2xhc3MgTmdUc2NQbHVnaW4gaW1wbGVtZW50cyBUc2NQbHVnaW4ge1xuICBuYW1lID0gJ25ndHNjJztcblxuICBwcml2YXRlIG9wdGlvbnM6IE5nQ29tcGlsZXJPcHRpb25zfG51bGwgPSBudWxsO1xuICBwcml2YXRlIGhvc3Q6IE5nQ29tcGlsZXJIb3N0fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9jb21waWxlcjogTmdDb21waWxlcnxudWxsID0gbnVsbDtcblxuICBnZXQgY29tcGlsZXIoKTogTmdDb21waWxlciB7XG4gICAgaWYgKHRoaXMuX2NvbXBpbGVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpZmVjeWNsZSBlcnJvcjogc2V0dXBDb21waWxhdGlvbigpIG11c3QgYmUgY2FsbGVkIGZpcnN0LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXI7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nT3B0aW9uczoge30pIHtcbiAgICBzZXRGaWxlU3lzdGVtKG5ldyBOb2RlSlNGaWxlU3lzdGVtKCkpO1xuICB9XG5cbiAgd3JhcEhvc3QoXG4gICAgICBob3N0OiB0cy5Db21waWxlckhvc3QmVW5pZmllZE1vZHVsZXNIb3N0LCBpbnB1dEZpbGVzOiByZWFkb25seSBzdHJpbmdbXSxcbiAgICAgIG9wdGlvbnM6IHRzLkNvbXBpbGVyT3B0aW9ucyk6IFBsdWdpbkNvbXBpbGVySG9zdCB7XG4gICAgdGhpcy5vcHRpb25zID0gey4uLnRoaXMubmdPcHRpb25zLCAuLi5vcHRpb25zfSBhcyBOZ0NvbXBpbGVyT3B0aW9ucztcbiAgICB0aGlzLmhvc3QgPSBOZ0NvbXBpbGVySG9zdC53cmFwKGhvc3QsIGlucHV0RmlsZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuaG9zdDtcbiAgfVxuXG4gIHNldHVwQ29tcGlsYXRpb24ocHJvZ3JhbTogdHMuUHJvZ3JhbSwgb2xkUHJvZ3JhbT86IHRzLlByb2dyYW0pOiB7XG4gICAgaWdub3JlRm9yRGlhZ25vc3RpY3M6IFNldDx0cy5Tb3VyY2VGaWxlPixcbiAgICBpZ25vcmVGb3JFbWl0OiBTZXQ8dHMuU291cmNlRmlsZT4sXG4gIH0ge1xuICAgIGlmICh0aGlzLmhvc3QgPT09IG51bGwgfHwgdGhpcy5vcHRpb25zID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpZmVjeWNsZSBlcnJvcjogc2V0dXBDb21waWxhdGlvbigpIGJlZm9yZSB3cmFwSG9zdCgpLicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21waWxlciA9XG4gICAgICAgIG5ldyBOZ0NvbXBpbGVyKHRoaXMuaG9zdCwgdGhpcy5vcHRpb25zLCBwcm9ncmFtLCBvbGRQcm9ncmFtLCBOT09QX1BFUkZfUkVDT1JERVIpO1xuICAgIHJldHVybiB7XG4gICAgICBpZ25vcmVGb3JEaWFnbm9zdGljczogdGhpcy5fY29tcGlsZXIuaWdub3JlRm9yRGlhZ25vc3RpY3MsXG4gICAgICBpZ25vcmVGb3JFbWl0OiB0aGlzLl9jb21waWxlci5pZ25vcmVGb3JFbWl0LFxuICAgIH07XG4gIH1cblxuICBnZXREaWFnbm9zdGljcyhmaWxlPzogdHMuU291cmNlRmlsZSk6IHRzLkRpYWdub3N0aWNbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZXIuZ2V0RGlhZ25vc3RpY3MoZmlsZSk7XG4gIH1cblxuICBnZXRPcHRpb25EaWFnbm9zdGljcygpOiB0cy5EaWFnbm9zdGljW10ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGVyLmdldE9wdGlvbkRpYWdub3N0aWNzKCk7XG4gIH1cblxuICBnZXROZXh0UHJvZ3JhbSgpOiB0cy5Qcm9ncmFtIHtcbiAgICByZXR1cm4gdGhpcy5jb21waWxlci5nZXROZXh0UHJvZ3JhbSgpO1xuICB9XG5cbiAgY3JlYXRlVHJhbnNmb3JtZXJzKCk6IHRzLkN1c3RvbVRyYW5zZm9ybWVycyB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGlsZXIucHJlcGFyZUVtaXQoKS50cmFuc2Zvcm1lcnM7XG4gIH1cbn1cbiJdfQ==