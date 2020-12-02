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
        define("@angular/compiler-cli/ngcc/src/host/delegating_host", ["require", "exports", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * A reflection host implementation that delegates reflector queries depending on whether they
     * reflect on declaration files (for dependent libraries) or source files within the entry-point
     * that is being compiled. The first type of queries are handled by the regular TypeScript
     * reflection host, whereas the other queries are handled by an `NgccReflectionHost` that is
     * specific to the entry-point's format.
     */
    var DelegatingReflectionHost = /** @class */ (function () {
        function DelegatingReflectionHost(tsHost, ngccHost) {
            this.tsHost = tsHost;
            this.ngccHost = ngccHost;
        }
        DelegatingReflectionHost.prototype.getConstructorParameters = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getConstructorParameters(clazz);
            }
            return this.ngccHost.getConstructorParameters(clazz);
        };
        DelegatingReflectionHost.prototype.getDeclarationOfIdentifier = function (id) {
            if (typescript_1.isFromDtsFile(id)) {
                return this.detectKnownDeclaration(this.tsHost.getDeclarationOfIdentifier(id));
            }
            return this.ngccHost.getDeclarationOfIdentifier(id);
        };
        DelegatingReflectionHost.prototype.getDecoratorsOfDeclaration = function (declaration) {
            if (typescript_1.isFromDtsFile(declaration)) {
                return this.tsHost.getDecoratorsOfDeclaration(declaration);
            }
            return this.ngccHost.getDecoratorsOfDeclaration(declaration);
        };
        DelegatingReflectionHost.prototype.getDefinitionOfFunction = function (fn) {
            if (typescript_1.isFromDtsFile(fn)) {
                return this.tsHost.getDefinitionOfFunction(fn);
            }
            return this.ngccHost.getDefinitionOfFunction(fn);
        };
        DelegatingReflectionHost.prototype.getDtsDeclaration = function (declaration) {
            if (typescript_1.isFromDtsFile(declaration)) {
                return this.tsHost.getDtsDeclaration(declaration);
            }
            return this.ngccHost.getDtsDeclaration(declaration);
        };
        DelegatingReflectionHost.prototype.getExportsOfModule = function (module) {
            var _this = this;
            if (typescript_1.isFromDtsFile(module)) {
                var exportMap = this.tsHost.getExportsOfModule(module);
                if (exportMap !== null) {
                    exportMap.forEach(function (decl) { return _this.detectKnownDeclaration(decl); });
                }
                return exportMap;
            }
            return this.ngccHost.getExportsOfModule(module);
        };
        DelegatingReflectionHost.prototype.getGenericArityOfClass = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getGenericArityOfClass(clazz);
            }
            return this.ngccHost.getGenericArityOfClass(clazz);
        };
        DelegatingReflectionHost.prototype.getImportOfIdentifier = function (id) {
            if (typescript_1.isFromDtsFile(id)) {
                return this.tsHost.getImportOfIdentifier(id);
            }
            return this.ngccHost.getImportOfIdentifier(id);
        };
        DelegatingReflectionHost.prototype.getInternalNameOfClass = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getInternalNameOfClass(clazz);
            }
            return this.ngccHost.getInternalNameOfClass(clazz);
        };
        DelegatingReflectionHost.prototype.getAdjacentNameOfClass = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getAdjacentNameOfClass(clazz);
            }
            return this.ngccHost.getAdjacentNameOfClass(clazz);
        };
        DelegatingReflectionHost.prototype.getMembersOfClass = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getMembersOfClass(clazz);
            }
            return this.ngccHost.getMembersOfClass(clazz);
        };
        DelegatingReflectionHost.prototype.getVariableValue = function (declaration) {
            if (typescript_1.isFromDtsFile(declaration)) {
                return this.tsHost.getVariableValue(declaration);
            }
            return this.ngccHost.getVariableValue(declaration);
        };
        DelegatingReflectionHost.prototype.hasBaseClass = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.hasBaseClass(clazz);
            }
            return this.ngccHost.hasBaseClass(clazz);
        };
        DelegatingReflectionHost.prototype.getBaseClassExpression = function (clazz) {
            if (typescript_1.isFromDtsFile(clazz)) {
                return this.tsHost.getBaseClassExpression(clazz);
            }
            return this.ngccHost.getBaseClassExpression(clazz);
        };
        DelegatingReflectionHost.prototype.isClass = function (node) {
            if (typescript_1.isFromDtsFile(node)) {
                return this.tsHost.isClass(node);
            }
            return this.ngccHost.isClass(node);
        };
        // Note: the methods below are specific to ngcc and the entry-point that is being compiled, so
        // they don't take declaration files into account.
        DelegatingReflectionHost.prototype.findClassSymbols = function (sourceFile) {
            return this.ngccHost.findClassSymbols(sourceFile);
        };
        DelegatingReflectionHost.prototype.getClassSymbol = function (node) {
            return this.ngccHost.getClassSymbol(node);
        };
        DelegatingReflectionHost.prototype.getDecoratorsOfSymbol = function (symbol) {
            return this.ngccHost.getDecoratorsOfSymbol(symbol);
        };
        DelegatingReflectionHost.prototype.getSwitchableDeclarations = function (module) {
            return this.ngccHost.getSwitchableDeclarations(module);
        };
        DelegatingReflectionHost.prototype.getEndOfClass = function (classSymbol) {
            return this.ngccHost.getEndOfClass(classSymbol);
        };
        DelegatingReflectionHost.prototype.detectKnownDeclaration = function (decl) {
            return this.ngccHost.detectKnownDeclaration(decl);
        };
        return DelegatingReflectionHost;
    }());
    exports.DelegatingReflectionHost = DelegatingReflectionHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZWdhdGluZ19ob3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2hvc3QvZGVsZWdhdGluZ19ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBS0gsa0ZBQXFFO0lBSXJFOzs7Ozs7T0FNRztJQUNIO1FBQ0Usa0NBQW9CLE1BQXNCLEVBQVUsUUFBNEI7WUFBNUQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7WUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFHLENBQUM7UUFFcEYsMkRBQXdCLEdBQXhCLFVBQXlCLEtBQXVCO1lBQzlDLElBQUksMEJBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCw2REFBMEIsR0FBMUIsVUFBMkIsRUFBaUI7WUFDMUMsSUFBSSwwQkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELDZEQUEwQixHQUExQixVQUEyQixXQUEyQjtZQUNwRCxJQUFJLDBCQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1RDtZQUNELE9BQU8sSUFBSSxD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QUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxpREFBYyxHQUFkLFVBQWUsSUFBYTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCx3REFBcUIsR0FBckIsVUFBc0IsTUFBdUI7WUFDM0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCw0REFBeUIsR0FBekIsVUFBMEIsTUFBZTtZQUN2QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELGdEQUFhLEdBQWIsVUFBYyxXQUE0QjtZQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFLRCx5REFBc0IsR0FBdEIsVUFBOEMsSUFBWTtZQUN4RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNILCtCQUFDO0lBQUQsQ0FBQyxBQS9JRCxJQStJQztJQS9JWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb24sIENsYXNzTWVtYmVyLCBDdG9yUGFyYW1ldGVyLCBEZWNsYXJhdGlvbiwgRGVjb3JhdG9yLCBGdW5jdGlvbkRlZmluaXRpb24sIEltcG9ydCwgUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9yZWZsZWN0aW9uJztcbmltcG9ydCB7aXNGcm9tRHRzRmlsZX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge05nY2NDbGFzc1N5bWJvbCwgTmdjY1JlZmxlY3Rpb25Ib3N0LCBTd2l0Y2hhYmxlVmFyaWFibGVEZWNsYXJhdGlvbn0gZnJvbSAnLi9uZ2NjX2hvc3QnO1xuXG4vKipcbiAqIEEgcmVmbGVjdGlvbiBob3N0IGltcGxlbWVudGF0aW9uIHRoYXQgZGVsZWdhdGVzIHJlZmxlY3RvciBxdWVyaWVzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXlcbiAqIHJlZmxlY3Qgb24gZGVjbGFyYXRpb24gZmlsZXMgKGZvciBkZXBlbmRlbnQgbGlicmFyaWVzKSBvciBzb3VyY2UgZmlsZXMgd2l0aGluIHRoZSBlbnRyeS1wb2ludFxuICogdGhhdCBpcyBiZWluZyBjb21waWxlZC4gVGhlIGZpcnN0IHR5cGUgb2YgcXVlcmllcyBhcmUgaGFuZGxlZCBieSB0aGUgcmVndWxhciBUeXBlU2NyaXB0XG4gKiByZWZsZWN0aW9uIGhvc3QsIHdoZXJlYXMgdGhlIG90aGVyIHF1ZXJpZXMgYXJlIGhhbmRsZWQgYnkgYW4gYE5nY2NSZWZsZWN0aW9uSG9zdGAgdGhhdCBpc1xuICogc3BlY2lmaWMgdG8gdGhlIGVudHJ5LXBvaW50J3MgZm9ybWF0LlxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGluZ1JlZmxlY3Rpb25Ib3N0IGltcGxlbWVudHMgTmdjY1JlZmxlY3Rpb25Ib3N0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0c0hvc3Q6IFJlZmxlY3Rpb25Ib3N0LCBwcml2YXRlIG5nY2NIb3N0OiBOZ2NjUmVmbGVjdGlvbkhvc3QpIHt9XG5cbiAgZ2V0Q29uc3RydWN0b3JQYXJhbWV0ZXJzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogQ3RvclBhcmFtZXRlcltdfG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldENvbnN0cnVjdG9yUGFyYW1ldGVycyhjbGF6eik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldENvbnN0cnVjdG9yUGFyYW1ldGVycyhjbGF6eik7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbk9mSWRlbnRpZmllcihpZDogdHMuSWRlbnRpZmllcik6IERlY2xhcmF0aW9ufG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGlkKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGV0ZWN0S25vd25EZWNsYXJhdGlvbih0aGlzLnRzSG9zdC5nZXREZWNsYXJhdGlvbk9mSWRlbnRpZmllcihpZCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXREZWNsYXJhdGlvbk9mSWRlbnRpZmllcihpZCk7XG4gIH1cblxuICBnZXREZWNvcmF0b3JzT2ZEZWNsYXJhdGlvbihkZWNsYXJhdGlvbjogdHMuRGVjbGFyYXRpb24pOiBEZWNvcmF0b3JbXXxudWxsIHtcbiAgICBpZiAoaXNGcm9tRHRzRmlsZShkZWNsYXJhdGlvbikpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzSG9zdC5nZXREZWNvcmF0b3JzT2ZEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldERlY29yYXRvcnNPZkRlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25PZkZ1bmN0aW9uKGZuOiB0cy5Ob2RlKTogRnVuY3Rpb25EZWZpbml0aW9ufG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGZuKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldERlZmluaXRpb25PZkZ1bmN0aW9uKGZuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuZ2V0RGVmaW5pdGlvbk9mRnVuY3Rpb24oZm4pO1xuICB9XG5cbiAgZ2V0RHRzRGVjbGFyYXRpb24oZGVjbGFyYXRpb246IHRzLkRlY2xhcmF0aW9uKTogdHMuRGVjbGFyYXRpb258bnVsbCB7XG4gICAgaWYgKGlzRnJvbUR0c0ZpbGUoZGVjbGFyYXRpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy50c0hvc3QuZ2V0RHRzRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXREdHNEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XG4gIH1cblxuICBnZXRFeHBvcnRzT2ZNb2R1bGUobW9kdWxlOiB0cy5Ob2RlKTogTWFwPHN0cmluZywgRGVjbGFyYXRpb24+fG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKG1vZHVsZSkpIHtcbiAgICAgIGNvbnN0IGV4cG9ydE1hcCA9IHRoaXMudHNIb3N0LmdldEV4cG9ydHNPZk1vZHVsZShtb2R1bGUpO1xuXG4gICAgICBpZiAoZXhwb3J0TWFwICE9PSBudWxsKSB7XG4gICAgICAgIGV4cG9ydE1hcC5mb3JFYWNoKGRlY2wgPT4gdGhpcy5kZXRlY3RLbm93bkRlY2xhcmF0aW9uKGRlY2wpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV4cG9ydE1hcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuZ2V0RXhwb3J0c09mTW9kdWxlKG1vZHVsZSk7XG4gIH1cblxuICBnZXRHZW5lcmljQXJpdHlPZkNsYXNzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogbnVtYmVyfG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldEdlbmVyaWNBcml0eU9mQ2xhc3MoY2xhenopO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXRHZW5lcmljQXJpdHlPZkNsYXNzKGNsYXp6KTtcbiAgfVxuXG4gIGdldEltcG9ydE9mSWRlbnRpZmllcihpZDogdHMuSWRlbnRpZmllcik6IEltcG9ydHxudWxsIHtcbiAgICBpZiAoaXNGcm9tRHRzRmlsZShpZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzSG9zdC5nZXRJbXBvcnRPZklkZW50aWZpZXIoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXRJbXBvcnRPZklkZW50aWZpZXIoaWQpO1xuICB9XG5cbiAgZ2V0SW50ZXJuYWxOYW1lT2ZDbGFzcyhjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IHRzLklkZW50aWZpZXIge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldEludGVybmFsTmFtZU9mQ2xhc3MoY2xhenopO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXRJbnRlcm5hbE5hbWVPZkNsYXNzKGNsYXp6KTtcbiAgfVxuXG4gIGdldEFkamFjZW50TmFtZU9mQ2xhc3MoY2xheno6IENsYXNzRGVjbGFyYXRpb24pOiB0cy5JZGVudGlmaWVyIHtcbiAgICBpZiAoaXNGcm9tRHRzRmlsZShjbGF6eikpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzSG9zdC5nZXRBZGphY2VudE5hbWVPZkNsYXNzKGNsYXp6KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuZ2V0QWRqYWNlbnROYW1lT2ZDbGFzcyhjbGF6eik7XG4gIH1cblxuICBnZXRNZW1iZXJzT2ZDbGFzcyhjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbik6IENsYXNzTWVtYmVyW10ge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldE1lbWJlcnNPZkNsYXNzKGNsYXp6KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuZ2V0TWVtYmVyc09mQ2xhc3MoY2xhenopO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVWYWx1ZShkZWNsYXJhdGlvbjogdHMuVmFyaWFibGVEZWNsYXJhdGlvbik6IHRzLkV4cHJlc3Npb258bnVsbCB7XG4gICAgaWYgKGlzRnJvbUR0c0ZpbGUoZGVjbGFyYXRpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy50c0hvc3QuZ2V0VmFyaWFibGVWYWx1ZShkZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldFZhcmlhYmxlVmFsdWUoZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgaGFzQmFzZUNsYXNzKGNsYXp6OiBDbGFzc0RlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gICAgaWYgKGlzRnJvbUR0c0ZpbGUoY2xhenopKSB7XG4gICAgICByZXR1cm4gdGhpcy50c0hvc3QuaGFzQmFzZUNsYXNzKGNsYXp6KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuaGFzQmFzZUNsYXNzKGNsYXp6KTtcbiAgfVxuXG4gIGdldEJhc2VDbGFzc0V4cHJlc3Npb24oY2xheno6IENsYXNzRGVjbGFyYXRpb24pOiB0cy5FeHByZXNzaW9ufG51bGwge1xuICAgIGlmIChpc0Zyb21EdHNGaWxlKGNsYXp6KSkge1xuICAgICAgcmV0dXJuIHRoaXMudHNIb3N0LmdldEJhc2VDbGFzc0V4cHJlc3Npb24oY2xhenopO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5nZXRCYXNlQ2xhc3NFeHByZXNzaW9uKGNsYXp6KTtcbiAgfVxuXG4gIGlzQ2xhc3Mobm9kZTogdHMuTm9kZSk6IG5vZGUgaXMgQ2xhc3NEZWNsYXJhdGlvbiB7XG4gICAgaWYgKGlzRnJvbUR0c0ZpbGUobm9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRzSG9zdC5pc0NsYXNzKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5pc0NsYXNzKG5vZGUpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIG1ldGhvZHMgYmVsb3cgYXJlIHNwZWNpZmljIHRvIG5nY2MgYW5kIHRoZSBlbnRyeS1wb2ludCB0aGF0IGlzIGJlaW5nIGNvbXBpbGVkLCBzb1xuICAvLyB0aGV5IGRvbid0IHRha2UgZGVjbGFyYXRpb24gZmlsZXMgaW50byBhY2NvdW50LlxuXG4gIGZpbmRDbGFzc1N5bWJvbHMoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IE5nY2NDbGFzc1N5bWJvbFtdIHtcbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5maW5kQ2xhc3NTeW1ib2xzKHNvdXJjZUZpbGUpO1xuICB9XG5cbiAgZ2V0Q2xhc3NTeW1ib2wobm9kZTogdHMuTm9kZSk6IE5nY2NDbGFzc1N5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldENsYXNzU3ltYm9sKG5vZGUpO1xuICB9XG5cbiAgZ2V0RGVjb3JhdG9yc09mU3ltYm9sKHN5bWJvbDogTmdjY0NsYXNzU3ltYm9sKTogRGVjb3JhdG9yW118bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmdjY0hvc3QuZ2V0RGVjb3JhdG9yc09mU3ltYm9sKHN5bWJvbCk7XG4gIH1cblxuICBnZXRTd2l0Y2hhYmxlRGVjbGFyYXRpb25zKG1vZHVsZTogdHMuTm9kZSk6IFN3aXRjaGFibGVWYXJpYWJsZURlY2xhcmF0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldFN3aXRjaGFibGVEZWNsYXJhdGlvbnMobW9kdWxlKTtcbiAgfVxuXG4gIGdldEVuZE9mQ2xhc3MoY2xhc3NTeW1ib2w6IE5nY2NDbGFzc1N5bWJvbCk6IHRzLk5vZGUge1xuICAgIHJldHVybiB0aGlzLm5nY2NIb3N0LmdldEVuZE9mQ2xhc3MoY2xhc3NTeW1ib2wpO1xuICB9XG5cbiAgZGV0ZWN0S25vd25EZWNsYXJhdGlvbihkZWNsOiBudWxsKTogbnVsbDtcbiAgZGV0ZWN0S25vd25EZWNsYXJhdGlvbjxUIGV4dGVuZHMgRGVjbGFyYXRpb24+KGRlY2w6IFQpOiBUO1xuICBkZXRlY3RLbm93bkRlY2xhcmF0aW9uPFQgZXh0ZW5kcyBEZWNsYXJhdGlvbj4oZGVjbDogVHxudWxsKTogVHxudWxsO1xuICBkZXRlY3RLbm93bkRlY2xhcmF0aW9uPFQgZXh0ZW5kcyBEZWNsYXJhdGlvbj4oZGVjbDogVHxudWxsKTogVHxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uZ2NjSG9zdC5kZXRlY3RLbm93bkRlY2xhcmF0aW9uKGRlY2wpO1xuICB9XG59XG4iXX0=