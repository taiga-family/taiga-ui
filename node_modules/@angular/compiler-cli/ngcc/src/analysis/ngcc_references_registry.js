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
        define("@angular/compiler-cli/ngcc/src/analysis/ngcc_references_registry", ["require", "exports", "@angular/compiler-cli/ngcc/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    /**
     * This is a place for DecoratorHandlers to register references that they
     * find in their analysis of the code.
     *
     * This registry is used to ensure that these references are publicly exported
     * from libraries that are compiled by ngcc.
     */
    var NgccReferencesRegistry = /** @class */ (function () {
        function NgccReferencesRegistry(host) {
            this.host = host;
            this.map = new Map();
        }
        /**
         * Register one or more references in the registry.
         * Only `ResolveReference` references are stored. Other types are ignored.
         * @param references A collection of references to register.
         */
        NgccReferencesRegistry.prototype.add = function (source) {
            var _this = this;
            var references = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                references[_i - 1] = arguments[_i];
            }
            references.forEach(function (ref) {
                // Only store relative references. We are not interested in literals.
                if (ref.bestGuessOwningModule === null && utils_1.hasNameIdentifier(ref.node)) {
                    var declaration = _this.host.getDeclarationOfIdentifier(ref.node.name);
                    if (declaration && declaration.node !== null && utils_1.hasNameIdentifier(declaration.node)) {
                        _this.map.set(declaration.node.name, declaration);
                    }
                }
            });
        };
        /**
         * Create and return a mapping for the registered resolved references.
         * @returns A map of reference identifiers to reference declarations.
         */
        NgccReferencesRegistry.prototype.getDeclarationMap = function () {
            return this.map;
        };
        return NgccReferencesRegistry;
    }());
    exports.NgccReferencesRegistry = NgccReferencesRegistry;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdjY19yZWZlcmVuY2VzX3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2FuYWx5c2lzL25nY2NfcmVmZXJlbmNlc19yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQU1ILDhEQUEyQztJQUUzQzs7Ozs7O09BTUc7SUFDSDtRQUdFLGdDQUFvQixJQUFvQjtZQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtZQUZoQyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXNDLENBQUM7UUFFakIsQ0FBQztRQUU1Qzs7OztXQUlHO1FBQ0gsb0NBQUcsR0FBSCxVQUFJLE1BQXNCO1lBQTFCLGlCQVVDO1lBVjJCLG9CQUEwQztpQkFBMUMsVUFBMEMsRUFBMUMscUJBQTBDLEVBQTFDLElBQTBDO2dCQUExQyxtQ0FBMEM7O1lBQ3BFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQixxRUFBcUU7Z0JBQ3JFLElBQUksR0FBRyxDQUFDLHFCQUFxQixLQUFLLElBQUksSUFBSSx5QkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JFLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUkseUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNuRixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxrREFBaUIsR0FBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQztRQUNILDZCQUFDO0lBQUQsQ0FBQyxBQTdCRCxJQTZCQztJQTdCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtSZWZlcmVuY2VzUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9hbm5vdGF0aW9ucyc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2ltcG9ydHMnO1xuaW1wb3J0IHtDb25jcmV0ZURlY2xhcmF0aW9uLCBSZWZsZWN0aW9uSG9zdH0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtoYXNOYW1lSWRlbnRpZmllcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBwbGFjZSBmb3IgRGVjb3JhdG9ySGFuZGxlcnMgdG8gcmVnaXN0ZXIgcmVmZXJlbmNlcyB0aGF0IHRoZXlcbiAqIGZpbmQgaW4gdGhlaXIgYW5hbHlzaXMgb2YgdGhlIGNvZGUuXG4gKlxuICogVGhpcyByZWdpc3RyeSBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IHRoZXNlIHJlZmVyZW5jZXMgYXJlIHB1YmxpY2x5IGV4cG9ydGVkXG4gKiBmcm9tIGxpYnJhcmllcyB0aGF0IGFyZSBjb21waWxlZCBieSBuZ2NjLlxuICovXG5leHBvcnQgY2xhc3MgTmdjY1JlZmVyZW5jZXNSZWdpc3RyeSBpbXBsZW1lbnRzIFJlZmVyZW5jZXNSZWdpc3RyeSB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDx0cy5JZGVudGlmaWVyLCBDb25jcmV0ZURlY2xhcmF0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogUmVmbGVjdGlvbkhvc3QpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG9uZSBvciBtb3JlIHJlZmVyZW5jZXMgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgKiBPbmx5IGBSZXNvbHZlUmVmZXJlbmNlYCByZWZlcmVuY2VzIGFyZSBzdG9yZWQuIE90aGVyIHR5cGVzIGFyZSBpZ25vcmVkLlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlcyBBIGNvbGxlY3Rpb24gb2YgcmVmZXJlbmNlcyB0byByZWdpc3Rlci5cbiAgICovXG4gIGFkZChzb3VyY2U6IHRzLkRlY2xhcmF0aW9uLCAuLi5yZWZlcmVuY2VzOiBSZWZlcmVuY2U8dHMuRGVjbGFyYXRpb24+W10pOiB2b2lkIHtcbiAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmID0+IHtcbiAgICAgIC8vIE9ubHkgc3RvcmUgcmVsYXRpdmUgcmVmZXJlbmNlcy4gV2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIGxpdGVyYWxzLlxuICAgICAgaWYgKHJlZi5iZXN0R3Vlc3NPd25pbmdNb2R1bGUgPT09IG51bGwgJiYgaGFzTmFtZUlkZW50aWZpZXIocmVmLm5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5ob3N0LmdldERlY2xhcmF0aW9uT2ZJZGVudGlmaWVyKHJlZi5ub2RlLm5hbWUpO1xuICAgICAgICBpZiAoZGVjbGFyYXRpb24gJiYgZGVjbGFyYXRpb24ubm9kZSAhPT0gbnVsbCAmJiBoYXNOYW1lSWRlbnRpZmllcihkZWNsYXJhdGlvbi5ub2RlKSkge1xuICAgICAgICAgIHRoaXMubWFwLnNldChkZWNsYXJhdGlvbi5ub2RlLm5hbWUsIGRlY2xhcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbWFwcGluZyBmb3IgdGhlIHJlZ2lzdGVyZWQgcmVzb2x2ZWQgcmVmZXJlbmNlcy5cbiAgICogQHJldHVybnMgQSBtYXAgb2YgcmVmZXJlbmNlIGlkZW50aWZpZXJzIHRvIHJlZmVyZW5jZSBkZWNsYXJhdGlvbnMuXG4gICAqL1xuICBnZXREZWNsYXJhdGlvbk1hcCgpOiBNYXA8dHMuSWRlbnRpZmllciwgQ29uY3JldGVEZWNsYXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm1hcDtcbiAgfVxufVxuIl19