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
        define("@angular/compiler-cli/src/ngtsc/shims/src/factory_tracker", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Maintains a mapping of which symbols in a .ngfactory file have been used.
     *
     * .ngfactory files are generated with one symbol per defined class in the source file, regardless
     * of whether the classes in the source files are NgModules (because that isn't known at the time
     * the factory files are generated). The `FactoryTracker` exists to support removing factory symbols
     * which didn't end up being NgModules, by tracking the ones which are.
     */
    var FactoryTracker = /** @class */ (function () {
        function FactoryTracker(generator) {
            var _this = this;
            this.sourceInfo = new Map();
            this.sourceToFactorySymbols = new Map();
            generator.factoryFileMap.forEach(function (sourceFilePath, factoryPath) {
                var moduleSymbolNames = new Set();
                _this.sourceToFactorySymbols.set(sourceFilePath, moduleSymbolNames);
                _this.sourceInfo.set(factoryPath, { sourceFilePath: sourceFilePath, moduleSymbolNames: moduleSymbolNames });
            });
        }
        FactoryTracker.prototype.track = function (sf, factorySymbolName) {
            if (this.sourceToFactorySymbols.has(sf.fileName)) {
                this.sourceToFactorySymbols.get(sf.fileName).add(factorySymbolName);
            }
        };
        return FactoryTracker;
    }());
    exports.FactoryTracker = FactoryTracker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeV90cmFja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9zaGltcy9zcmMvZmFjdG9yeV90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBTUg7Ozs7Ozs7T0FPRztJQUNIO1FBSUUsd0JBQVksU0FBMkI7WUFBdkMsaUJBTUM7WUFUUSxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7WUFDN0MsMkJBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7WUFHOUQsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxjQUFjLEVBQUUsV0FBVztnQkFDM0QsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO2dCQUM1QyxLQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxjQUFjLGdCQUFBLEVBQUUsaUJBQWlCLG1CQUFBLEVBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDhCQUFLLEdBQUwsVUFBTSxFQUFpQixFQUFFLGlCQUF5QjtZQUNoRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN0RTtRQUNILENBQUM7UUFDSCxxQkFBQztJQUFELENBQUMsQUFqQkQsSUFpQkM7SUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ZhY3RvcnlHZW5lcmF0b3IsIEZhY3RvcnlJbmZvfSBmcm9tICcuL2ZhY3RvcnlfZ2VuZXJhdG9yJztcblxuLyoqXG4gKiBNYWludGFpbnMgYSBtYXBwaW5nIG9mIHdoaWNoIHN5bWJvbHMgaW4gYSAubmdmYWN0b3J5IGZpbGUgaGF2ZSBiZWVuIHVzZWQuXG4gKlxuICogLm5nZmFjdG9yeSBmaWxlcyBhcmUgZ2VuZXJhdGVkIHdpdGggb25lIHN5bWJvbCBwZXIgZGVmaW5lZCBjbGFzcyBpbiB0aGUgc291cmNlIGZpbGUsIHJlZ2FyZGxlc3NcbiAqIG9mIHdoZXRoZXIgdGhlIGNsYXNzZXMgaW4gdGhlIHNvdXJjZSBmaWxlcyBhcmUgTmdNb2R1bGVzIChiZWNhdXNlIHRoYXQgaXNuJ3Qga25vd24gYXQgdGhlIHRpbWVcbiAqIHRoZSBmYWN0b3J5IGZpbGVzIGFyZSBnZW5lcmF0ZWQpLiBUaGUgYEZhY3RvcnlUcmFja2VyYCBleGlzdHMgdG8gc3VwcG9ydCByZW1vdmluZyBmYWN0b3J5IHN5bWJvbHNcbiAqIHdoaWNoIGRpZG4ndCBlbmQgdXAgYmVpbmcgTmdNb2R1bGVzLCBieSB0cmFja2luZyB0aGUgb25lcyB3aGljaCBhcmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBGYWN0b3J5VHJhY2tlciB7XG4gIHJlYWRvbmx5IHNvdXJjZUluZm8gPSBuZXcgTWFwPHN0cmluZywgRmFjdG9yeUluZm8+KCk7XG4gIHByaXZhdGUgc291cmNlVG9GYWN0b3J5U3ltYm9scyA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuICBjb25zdHJ1Y3RvcihnZW5lcmF0b3I6IEZhY3RvcnlHZW5lcmF0b3IpIHtcbiAgICBnZW5lcmF0b3IuZmFjdG9yeUZpbGVNYXAuZm9yRWFjaCgoc291cmNlRmlsZVBhdGgsIGZhY3RvcnlQYXRoKSA9PiB7XG4gICAgICBjb25zdCBtb2R1bGVTeW1ib2xOYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgdGhpcy5zb3VyY2VUb0ZhY3RvcnlTeW1ib2xzLnNldChzb3VyY2VGaWxlUGF0aCwgbW9kdWxlU3ltYm9sTmFtZXMpO1xuICAgICAgdGhpcy5zb3VyY2VJbmZvLnNldChmYWN0b3J5UGF0aCwge3NvdXJjZUZpbGVQYXRoLCBtb2R1bGVTeW1ib2xOYW1lc30pO1xuICAgIH0pO1xuICB9XG5cbiAgdHJhY2soc2Y6IHRzLlNvdXJjZUZpbGUsIGZhY3RvcnlTeW1ib2xOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3VyY2VUb0ZhY3RvcnlTeW1ib2xzLmhhcyhzZi5maWxlTmFtZSkpIHtcbiAgICAgIHRoaXMuc291cmNlVG9GYWN0b3J5U3ltYm9scy5nZXQoc2YuZmlsZU5hbWUpIS5hZGQoZmFjdG9yeVN5bWJvbE5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19