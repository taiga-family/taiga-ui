/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/cdk/schematics/update-tool/utils/decorators", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/utils/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const imports_1 = require("@angular/cdk/schematics/update-tool/utils/imports");
    /**
     * Gets all decorators which are imported from an Angular package
     * (e.g. "@angular/core") from a list of decorators.
     */
    function getAngularDecorators(typeChecker, decorators) {
        return decorators.map(node => ({ node, importData: getCallDecoratorImport(typeChecker, node) }))
            .filter(({ importData }) => importData && importData.moduleName.startsWith('@angular/'))
            .map(({ node, importData }) => ({ node: node, name: importData.symbolName }));
    }
    exports.getAngularDecorators = getAngularDecorators;
    function getCallDecoratorImport(typeChecker, decorator) {
        if (!ts.isCallExpression(decorator.expression)) {
            return null;
        }
        const valueExpr = decorator.expression.expression;
        let identifier = null;
        if (ts.isIdentifier(valueExpr)) {
            identifier = valueExpr;
        }
        else if (ts.isPropertyAccessExpression(valueExpr) && ts.isIdentifier(valueExpr.name)) {
            identifier = valueExpr.name;
        }
        return identifier ? imports_1.getImportOfIdentifier(identifier, typeChecker) : null;
    }
    exports.getCallDecoratorImport = getCallDecoratorImport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91cGRhdGUtdG9vbC91dGlscy9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLCtFQUF3RDtJQVd4RDs7O09BR0c7SUFDSCxTQUFnQixvQkFBb0IsQ0FDaEMsV0FBMkIsRUFBRSxVQUF1QztRQUN0RSxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ3pGLE1BQU0sQ0FBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyRixHQUFHLENBQ0EsQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFFLENBQ25CLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBK0IsRUFBRSxJQUFJLEVBQUUsVUFBVyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBUEQsb0RBT0M7SUFFRCxTQUFnQixzQkFBc0IsQ0FDbEMsV0FBMkIsRUFBRSxTQUF1QjtRQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDbEQsSUFBSSxVQUFVLEdBQXVCLElBQUksQ0FBQztRQUMxQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUN4QjthQUFNLElBQUksRUFBRSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RGLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLCtCQUFxQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVFLENBQUM7SUFiRCx3REFhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtnZXRJbXBvcnRPZklkZW50aWZpZXIsIEltcG9ydH0gZnJvbSAnLi9pbXBvcnRzJztcblxuZXhwb3J0IHR5cGUgQ2FsbEV4cHJlc3Npb25EZWNvcmF0b3IgPSB0cy5EZWNvcmF0b3Ime1xuICBleHByZXNzaW9uOiB0cy5DYWxsRXhwcmVzc2lvbjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdEZWNvcmF0b3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIG5vZGU6IENhbGxFeHByZXNzaW9uRGVjb3JhdG9yO1xufVxuXG4vKipcbiAqIEdldHMgYWxsIGRlY29yYXRvcnMgd2hpY2ggYXJlIGltcG9ydGVkIGZyb20gYW4gQW5ndWxhciBwYWNrYWdlXG4gKiAoZS5nLiBcIkBhbmd1bGFyL2NvcmVcIikgZnJvbSBhIGxpc3Qgb2YgZGVjb3JhdG9ycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ3VsYXJEZWNvcmF0b3JzKFxuICAgIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgZGVjb3JhdG9yczogUmVhZG9ubHlBcnJheTx0cy5EZWNvcmF0b3I+KTogTmdEZWNvcmF0b3JbXSB7XG4gIHJldHVybiBkZWNvcmF0b3JzLm1hcChub2RlID0+ICh7bm9kZSwgaW1wb3J0RGF0YTogZ2V0Q2FsbERlY29yYXRvckltcG9ydCh0eXBlQ2hlY2tlciwgbm9kZSl9KSlcbiAgICAgIC5maWx0ZXIoKHtpbXBvcnREYXRhfSkgPT4gaW1wb3J0RGF0YSAmJiBpbXBvcnREYXRhLm1vZHVsZU5hbWUuc3RhcnRzV2l0aCgnQGFuZ3VsYXIvJykpXG4gICAgICAubWFwKFxuICAgICAgICAgICh7bm9kZSwgaW1wb3J0RGF0YX0pID0+XG4gICAgICAgICAgICAgICh7bm9kZTogbm9kZSBhcyBDYWxsRXhwcmVzc2lvbkRlY29yYXRvciwgbmFtZTogaW1wb3J0RGF0YSEuc3ltYm9sTmFtZX0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGxEZWNvcmF0b3JJbXBvcnQoXG4gICAgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBkZWNvcmF0b3I6IHRzLkRlY29yYXRvcik6IEltcG9ydHxudWxsIHtcbiAgaWYgKCF0cy5pc0NhbGxFeHByZXNzaW9uKGRlY29yYXRvci5leHByZXNzaW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHZhbHVlRXhwciA9IGRlY29yYXRvci5leHByZXNzaW9uLmV4cHJlc3Npb247XG4gIGxldCBpZGVudGlmaWVyOiB0cy5JZGVudGlmaWVyfG51bGwgPSBudWxsO1xuICBpZiAodHMuaXNJZGVudGlmaWVyKHZhbHVlRXhwcikpIHtcbiAgICBpZGVudGlmaWVyID0gdmFsdWVFeHByO1xuICB9IGVsc2UgaWYgKHRzLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKHZhbHVlRXhwcikgJiYgdHMuaXNJZGVudGlmaWVyKHZhbHVlRXhwci5uYW1lKSkge1xuICAgIGlkZW50aWZpZXIgPSB2YWx1ZUV4cHIubmFtZTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllciA/IGdldEltcG9ydE9mSWRlbnRpZmllcihpZGVudGlmaWVyLCB0eXBlQ2hlY2tlcikgOiBudWxsO1xufVxuIl19