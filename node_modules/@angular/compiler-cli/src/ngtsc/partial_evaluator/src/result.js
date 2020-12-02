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
        define("@angular/compiler-cli/src/ngtsc/partial_evaluator/src/result", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A collection of publicly exported declarations from a module. Each declaration is evaluated
     * lazily upon request.
     */
    var ResolvedModule = /** @class */ (function () {
        function ResolvedModule(exports, evaluate) {
            this.exports = exports;
            this.evaluate = evaluate;
        }
        ResolvedModule.prototype.getExport = function (name) {
            if (!this.exports.has(name)) {
                return undefined;
            }
            return this.evaluate(this.exports.get(name));
        };
        ResolvedModule.prototype.getExports = function () {
            var _this = this;
            var map = new Map();
            this.exports.forEach(function (decl, name) {
                map.set(name, _this.evaluate(decl));
            });
            return map;
        };
        return ResolvedModule;
    }());
    exports.ResolvedModule = ResolvedModule;
    /**
     * A value member of an enumeration.
     *
     * Contains a `Reference` to the enumeration itself, and the name of the referenced member.
     */
    var EnumValue = /** @class */ (function () {
        function EnumValue(enumRef, name, resolved) {
            this.enumRef = enumRef;
            this.name = name;
            this.resolved = resolved;
        }
        return EnumValue;
    }());
    exports.EnumValue = EnumValue;
    /**
     * An implementation of a known function that can be statically evaluated.
     * It could be a built-in function or method (such as `Array.prototype.slice`) or a TypeScript
     * helper (such as `__spread`).
     */
    var KnownFn = /** @class */ (function () {
        function KnownFn() {
        }
        return KnownFn;
    }());
    exports.KnownFn = KnownFn;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvci9zcmMvcmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBb0NIOzs7T0FHRztJQUNIO1FBQ0Usd0JBQ1ksT0FBaUMsRUFDakMsUUFBOEM7WUFEOUMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7WUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBc0M7UUFBRyxDQUFDO1FBRTlELGtDQUFTLEdBQVQsVUFBVSxJQUFZO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsbUNBQVUsR0FBVjtZQUFBLGlCQU1DO1lBTEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtnQkFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQUFDLEFBcEJELElBb0JDO0lBcEJZLHdDQUFjO0lBc0IzQjs7OztPQUlHO0lBQ0g7UUFDRSxtQkFDYSxPQUFrQyxFQUFXLElBQVksRUFDekQsUUFBdUI7WUFEdkIsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7WUFBVyxTQUFJLEdBQUosSUFBSSxDQUFRO1lBQ3pELGFBQVEsR0FBUixRQUFRLENBQWU7UUFBRyxDQUFDO1FBQzFDLGdCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSw4QkFBUztJQU10Qjs7OztPQUlHO0lBQ0g7UUFBQTtRQUVBLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFGcUIsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vLi4vaW1wb3J0cyc7XG5pbXBvcnQge0RlY2xhcmF0aW9ufSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcblxuaW1wb3J0IHtEeW5hbWljVmFsdWV9IGZyb20gJy4vZHluYW1pYyc7XG5cblxuLyoqXG4gKiBBIHZhbHVlIHJlc3VsdGluZyBmcm9tIHN0YXRpYyByZXNvbHV0aW9uLlxuICpcbiAqIFRoaXMgY291bGQgYmUgYSBwcmltaXRpdmUsIGNvbGxlY3Rpb24gdHlwZSwgcmVmZXJlbmNlIHRvIGEgYHRzLk5vZGVgIHRoYXQgZGVjbGFyZXMgYVxuICogbm9uLXByaW1pdGl2ZSB2YWx1ZSwgb3IgYSBzcGVjaWFsIGBEeW5hbWljVmFsdWVgIHR5cGUgd2hpY2ggaW5kaWNhdGVzIHRoZSB2YWx1ZSB3YXMgbm90XG4gKiBhdmFpbGFibGUgc3RhdGljYWxseS5cbiAqL1xuZXhwb3J0IHR5cGUgUmVzb2x2ZWRWYWx1ZSA9IG51bWJlcnxib29sZWFufHN0cmluZ3xudWxsfHVuZGVmaW5lZHxSZWZlcmVuY2V8RW51bVZhbHVlfFxuICAgIFJlc29sdmVkVmFsdWVBcnJheXxSZXNvbHZlZFZhbHVlTWFwfFJlc29sdmVkTW9kdWxlfEtub3duRm58RHluYW1pY1ZhbHVlPHVua25vd24+O1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIGBSZXNvbHZlZFZhbHVlYHMuXG4gKlxuICogVGhpcyBpcyBhIHJlaWZpZWQgdHlwZSB0byBhbGxvdyB0aGUgY2lyY3VsYXIgcmVmZXJlbmNlIG9mIGBSZXNvbHZlZFZhbHVlYCAtPiBgUmVzb2x2ZWRWYWx1ZUFycmF5YFxuICogLT4gYFJlc29sdmVkVmFsdWVgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVkVmFsdWVBcnJheSBleHRlbmRzIEFycmF5PFJlc29sdmVkVmFsdWU+IHt9XG5cbi8qKlxuICogQSBtYXAgb2Ygc3RyaW5ncyB0byBgUmVzb2x2ZWRWYWx1ZWBzLlxuICpcbiAqIFRoaXMgaXMgYSByZWlmaWVkIHR5cGUgdG8gYWxsb3cgdGhlIGNpcmN1bGFyIHJlZmVyZW5jZSBvZiBgUmVzb2x2ZWRWYWx1ZWAgLT4gYFJlc29sdmVkVmFsdWVNYXBgXG4gKiAtPiBgUmVzb2x2ZWRWYWx1ZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZWRWYWx1ZU1hcCBleHRlbmRzIE1hcDxzdHJpbmcsIFJlc29sdmVkVmFsdWU+IHt9XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHB1YmxpY2x5IGV4cG9ydGVkIGRlY2xhcmF0aW9ucyBmcm9tIGEgbW9kdWxlLiBFYWNoIGRlY2xhcmF0aW9uIGlzIGV2YWx1YXRlZFxuICogbGF6aWx5IHVwb24gcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmVkTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGV4cG9ydHM6IE1hcDxzdHJpbmcsIERlY2xhcmF0aW9uPixcbiAgICAgIHByaXZhdGUgZXZhbHVhdGU6IChkZWNsOiBEZWNsYXJhdGlvbikgPT4gUmVzb2x2ZWRWYWx1ZSkge31cblxuICBnZXRFeHBvcnQobmFtZTogc3RyaW5nKTogUmVzb2x2ZWRWYWx1ZSB7XG4gICAgaWYgKCF0aGlzLmV4cG9ydHMuaGFzKG5hbWUpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmV2YWx1YXRlKHRoaXMuZXhwb3J0cy5nZXQobmFtZSkhKTtcbiAgfVxuXG4gIGdldEV4cG9ydHMoKTogUmVzb2x2ZWRWYWx1ZU1hcCB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIFJlc29sdmVkVmFsdWU+KCk7XG4gICAgdGhpcy5leHBvcnRzLmZvckVhY2goKGRlY2wsIG5hbWUpID0+IHtcbiAgICAgIG1hcC5zZXQobmFtZSwgdGhpcy5ldmFsdWF0ZShkZWNsKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmFsdWUgbWVtYmVyIG9mIGFuIGVudW1lcmF0aW9uLlxuICpcbiAqIENvbnRhaW5zIGEgYFJlZmVyZW5jZWAgdG8gdGhlIGVudW1lcmF0aW9uIGl0c2VsZiwgYW5kIHRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIG1lbWJlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEVudW1WYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcmVhZG9ubHkgZW51bVJlZjogUmVmZXJlbmNlPHRzLkRlY2xhcmF0aW9uPiwgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgICAgcmVhZG9ubHkgcmVzb2x2ZWQ6IFJlc29sdmVkVmFsdWUpIHt9XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBrbm93biBmdW5jdGlvbiB0aGF0IGNhbiBiZSBzdGF0aWNhbGx5IGV2YWx1YXRlZC5cbiAqIEl0IGNvdWxkIGJlIGEgYnVpbHQtaW4gZnVuY3Rpb24gb3IgbWV0aG9kIChzdWNoIGFzIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgKSBvciBhIFR5cGVTY3JpcHRcbiAqIGhlbHBlciAoc3VjaCBhcyBgX19zcHJlYWRgKS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtub3duRm4ge1xuICBhYnN0cmFjdCBldmFsdWF0ZShub2RlOiB0cy5DYWxsRXhwcmVzc2lvbiwgYXJnczogUmVzb2x2ZWRWYWx1ZUFycmF5KTogUmVzb2x2ZWRWYWx1ZTtcbn1cbiJdfQ==