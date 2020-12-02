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
        define("@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/source_file_exports", ["require", "exports", "typescript", "@angular/core/schematics/utils/typescript/symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const symbol_1 = require("@angular/core/schematics/utils/typescript/symbol");
    /** Computes the resolved exports of a given source file. */
    function getExportSymbolsOfFile(sf, typeChecker) {
        const exports = [];
        const resolvedExports = [];
        ts.forEachChild(sf, function visitNode(node) {
            if (ts.isClassDeclaration(node) || ts.isFunctionDeclaration(node) ||
                ts.isInterfaceDeclaration(node) &&
                    (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0) {
                if (node.name) {
                    exports.push({ exportName: node.name.text, identifier: node.name });
                }
            }
            else if (ts.isVariableStatement(node)) {
                for (const decl of node.declarationList.declarations) {
                    visitNode(decl);
                }
            }
            else if (ts.isVariableDeclaration(node)) {
                if ((ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) != 0 &&
                    ts.isIdentifier(node.name)) {
                    exports.push({ exportName: node.name.text, identifier: node.name });
                }
            }
            else if (ts.isExportDeclaration(node)) {
                const { moduleSpecifier, exportClause } = node;
                if (!moduleSpecifier && exportClause && ts.isNamedExports(exportClause)) {
                    exportClause.elements.forEach(el => exports.push({
                        exportName: el.name.text,
                        identifier: el.propertyName ? el.propertyName : el.name
                    }));
                }
            }
        });
        exports.forEach(({ identifier, exportName }) => {
            const symbol = symbol_1.getValueSymbolOfDeclaration(identifier, typeChecker);
            if (symbol) {
                resolvedExports.push({ symbol, identifier, exportName });
            }
        });
        return resolvedExports;
    }
    exports.getExportSymbolsOfFile = getExportSymbolsOfFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX2ZpbGVfZXhwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc2NoZW1hdGljcy9taWdyYXRpb25zL3VuZGVjb3JhdGVkLWNsYXNzZXMtd2l0aC1kaS9kZWNvcmF0b3JfcmV3cml0ZS9zb3VyY2VfZmlsZV9leHBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBQ2pDLDZFQUE2RTtJQVE3RSw0REFBNEQ7SUFDNUQsU0FBZ0Isc0JBQXNCLENBQ2xDLEVBQWlCLEVBQUUsV0FBMkI7UUFDaEQsTUFBTSxPQUFPLEdBQXNELEVBQUUsQ0FBQztRQUN0RSxNQUFNLGVBQWUsR0FBcUIsRUFBRSxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFNBQVMsU0FBUyxDQUFDLElBQUk7WUFDekMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztnQkFDN0QsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztvQkFDM0IsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsSUFBc0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3RixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7aUJBQ25FO2FBQ0Y7aUJBQU0sSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7b0JBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7YUFDRjtpQkFBTSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2xFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztpQkFDbkU7YUFDRjtpQkFBTSxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxlQUFlLElBQUksWUFBWSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3ZFLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDL0MsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSTt3QkFDeEIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJO3FCQUN4RCxDQUFDLENBQUMsQ0FBQztpQkFDTDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBRTtZQUMzQyxNQUFNLE1BQU0sR0FBRyxvQ0FBMkIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDcEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQzthQUN4RDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQXhDRCx3REF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtnZXRWYWx1ZVN5bWJvbE9mRGVjbGFyYXRpb259IGZyb20gJy4uLy4uLy4uL3V0aWxzL3R5cGVzY3JpcHQvc3ltYm9sJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlZEV4cG9ydCB7XG4gIHN5bWJvbDogdHMuU3ltYm9sO1xuICBleHBvcnROYW1lOiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHRzLklkZW50aWZpZXI7XG59XG5cbi8qKiBDb21wdXRlcyB0aGUgcmVzb2x2ZWQgZXhwb3J0cyBvZiBhIGdpdmVuIHNvdXJjZSBmaWxlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cG9ydFN5bWJvbHNPZkZpbGUoXG4gICAgc2Y6IHRzLlNvdXJjZUZpbGUsIHR5cGVDaGVja2VyOiB0cy5UeXBlQ2hlY2tlcik6IFJlc29sdmVkRXhwb3J0W10ge1xuICBjb25zdCBleHBvcnRzOiB7ZXhwb3J0TmFtZTogc3RyaW5nLCBpZGVudGlmaWVyOiB0cy5JZGVudGlmaWVyfVtdID0gW107XG4gIGNvbnN0IHJlc29sdmVkRXhwb3J0czogUmVzb2x2ZWRFeHBvcnRbXSA9IFtdO1xuXG4gIHRzLmZvckVhY2hDaGlsZChzZiwgZnVuY3Rpb24gdmlzaXROb2RlKG5vZGUpIHtcbiAgICBpZiAodHMuaXNDbGFzc0RlY2xhcmF0aW9uKG5vZGUpIHx8IHRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihub2RlKSB8fFxuICAgICAgICB0cy5pc0ludGVyZmFjZURlY2xhcmF0aW9uKG5vZGUpICYmXG4gICAgICAgICAgICAodHMuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUgYXMgdHMuRGVjbGFyYXRpb24pICYgdHMuTW9kaWZpZXJGbGFncy5FeHBvcnQpICE9PSAwKSB7XG4gICAgICBpZiAobm9kZS5uYW1lKSB7XG4gICAgICAgIGV4cG9ydHMucHVzaCh7ZXhwb3J0TmFtZTogbm9kZS5uYW1lLnRleHQsIGlkZW50aWZpZXI6IG5vZGUubmFtZX0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHMuaXNWYXJpYWJsZVN0YXRlbWVudChub2RlKSkge1xuICAgICAgZm9yIChjb25zdCBkZWNsIG9mIG5vZGUuZGVjbGFyYXRpb25MaXN0LmRlY2xhcmF0aW9ucykge1xuICAgICAgICB2aXNpdE5vZGUoZGVjbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cy5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgIGlmICgodHMuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUpICYgdHMuTW9kaWZpZXJGbGFncy5FeHBvcnQpICE9IDAgJiZcbiAgICAgICAgICB0cy5pc0lkZW50aWZpZXIobm9kZS5uYW1lKSkge1xuICAgICAgICBleHBvcnRzLnB1c2goe2V4cG9ydE5hbWU6IG5vZGUubmFtZS50ZXh0LCBpZGVudGlmaWVyOiBub2RlLm5hbWV9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRzLmlzRXhwb3J0RGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgIGNvbnN0IHttb2R1bGVTcGVjaWZpZXIsIGV4cG9ydENsYXVzZX0gPSBub2RlO1xuICAgICAgaWYgKCFtb2R1bGVTcGVjaWZpZXIgJiYgZXhwb3J0Q2xhdXNlICYmIHRzLmlzTmFtZWRFeHBvcnRzKGV4cG9ydENsYXVzZSkpIHtcbiAgICAgICAgZXhwb3J0Q2xhdXNlLmVsZW1lbnRzLmZvckVhY2goZWwgPT4gZXhwb3J0cy5wdXNoKHtcbiAgICAgICAgICBleHBvcnROYW1lOiBlbC5uYW1lLnRleHQsXG4gICAgICAgICAgaWRlbnRpZmllcjogZWwucHJvcGVydHlOYW1lID8gZWwucHJvcGVydHlOYW1lIDogZWwubmFtZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBleHBvcnRzLmZvckVhY2goKHtpZGVudGlmaWVyLCBleHBvcnROYW1lfSkgPT4ge1xuICAgIGNvbnN0IHN5bWJvbCA9IGdldFZhbHVlU3ltYm9sT2ZEZWNsYXJhdGlvbihpZGVudGlmaWVyLCB0eXBlQ2hlY2tlcik7XG4gICAgaWYgKHN5bWJvbCkge1xuICAgICAgcmVzb2x2ZWRFeHBvcnRzLnB1c2goe3N5bWJvbCwgaWRlbnRpZmllciwgZXhwb3J0TmFtZX0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc29sdmVkRXhwb3J0cztcbn1cbiJdfQ==