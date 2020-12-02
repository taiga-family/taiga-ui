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
        define("@angular/cdk/schematics/ng-update/migrations/class-names", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/imports", "@angular/cdk/schematics/ng-update/typescript/module-specifiers", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const imports_1 = require("@angular/cdk/schematics/ng-update/typescript/imports");
    const module_specifiers_1 = require("@angular/cdk/schematics/ng-update/typescript/module-specifiers");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every identifier that is part of Angular Material or thr CDK
     * and replaces the outdated name with the new one if specified in the upgrade data.
     */
    // TODO: rework this rule to identify symbols using the import identifier resolver. This
    // makes it more robust, less AST convoluted and is more TypeScript AST idiomatic. COMP-300.
    class ClassNamesMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'classNames');
            /**
             * List of identifier names that have been imported from `@angular/material` or `@angular/cdk`
             * in the current source file and therefore can be considered trusted.
             */
            this.trustedIdentifiers = new Set();
            /** List of namespaces that have been imported from `@angular/material` or `@angular/cdk`. */
            this.trustedNamespaces = new Set();
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isIdentifier(node)) {
                this._visitIdentifier(node);
            }
        }
        /** Method that is called for every identifier inside of the specified project. */
        _visitIdentifier(identifier) {
            // For identifiers that aren't listed in the className data, the whole check can be
            // skipped safely.
            if (!this.data.some(data => data.replace === identifier.text)) {
                return;
            }
            // For namespace imports that are referring to Angular Material or the CDK, we store the
            // namespace name in order to be able to safely find identifiers that don't belong to the
            // developer's application.
            if (imports_1.isNamespaceImportNode(identifier) && module_specifiers_1.isMaterialImportDeclaration(identifier)) {
                this.trustedNamespaces.add(identifier.text);
                return this._createFailureWithReplacement(identifier);
            }
            // For export declarations that are referring to Angular Material or the CDK, the identifier
            // can be immediately updated to the new name.
            if (imports_1.isExportSpecifierNode(identifier) && module_specifiers_1.isMaterialExportDeclaration(identifier)) {
                return this._createFailureWithReplacement(identifier);
            }
            // For import declarations that are referring to Angular Material or the CDK, the name of
            // the import identifiers. This allows us to identify identifiers that belong to Material and
            // the CDK, and we won't accidentally touch a developer's identifier.
            if (imports_1.isImportSpecifierNode(identifier) && module_specifiers_1.isMaterialImportDeclaration(identifier)) {
                this.trustedIdentifiers.add(identifier.text);
                return this._createFailureWithReplacement(identifier);
            }
            // In case the identifier is part of a property access expression, we need to verify that the
            // property access originates from a namespace that has been imported from Material or the CDK.
            if (ts.isPropertyAccessExpression(identifier.parent)) {
                const expression = identifier.parent.expression;
                if (ts.isIdentifier(expression) && this.trustedNamespaces.has(expression.text)) {
                    return this._createFailureWithReplacement(identifier);
                }
            }
            else if (this.trustedIdentifiers.has(identifier.text)) {
                return this._createFailureWithReplacement(identifier);
            }
        }
        /** Creates a failure and replacement for the specified identifier. */
        _createFailureWithReplacement(identifier) {
            const classData = this.data.find(data => data.replace === identifier.text);
            this.fileSystem.edit(identifier.getSourceFile().fileName)
                .remove(identifier.getStart(), identifier.getWidth())
                .insertRight(identifier.getStart(), classData.replaceWith);
        }
    }
    exports.ClassNamesMigration = ClassNamesMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvY2xhc3MtbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxpQ0FBaUM7SUFDakMsNkVBQXNEO0lBR3RELGtGQUkrQjtJQUMvQixzR0FHeUM7SUFDekMsaUZBQW1FO0lBRW5FOzs7T0FHRztJQUNILHdGQUF3RjtJQUN4Riw0RkFBNEY7SUFDNUYsTUFBYSxtQkFBb0IsU0FBUSxxQkFBc0I7UUFBL0Q7O1lBQ0UsaUVBQWlFO1lBQ2pFLFNBQUksR0FBMkIsb0NBQXFCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRXpFOzs7ZUFHRztZQUNILHVCQUFrQixHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRTVDLDZGQUE2RjtZQUM3RixzQkFBaUIsR0FBZ0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUUzQywyREFBMkQ7WUFDM0QsWUFBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQTZEbkMsQ0FBQztRQTNEQyxTQUFTLENBQUMsSUFBYTtZQUNyQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUM7UUFFRCxrRkFBa0Y7UUFDMUUsZ0JBQWdCLENBQUMsVUFBeUI7WUFDaEQsbUZBQW1GO1lBQ25GLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0QsT0FBTzthQUNSO1lBRUQsd0ZBQXdGO1lBQ3hGLHlGQUF5RjtZQUN6RiwyQkFBMkI7WUFDM0IsSUFBSSwrQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSwrQ0FBMkIsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVDLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsNEZBQTRGO1lBQzVGLDhDQUE4QztZQUM5QyxJQUFJLCtCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLCtDQUEyQixDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoRixPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2RDtZQUVELHlGQUF5RjtZQUN6Riw2RkFBNkY7WUFDN0YscUVBQXFFO1lBQ3JFLElBQUksK0JBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksK0NBQTJCLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU3QyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2RDtZQUVELDZGQUE2RjtZQUM3RiwrRkFBK0Y7WUFDL0YsSUFBSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFFaEQsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5RSxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2RDtRQUNILENBQUM7UUFFRCxzRUFBc0U7UUFDOUQsNkJBQTZCLENBQUMsVUFBeUI7WUFDN0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUU1RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN0RCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDcEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUNGO0lBM0VELGtEQTJFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7TWlncmF0aW9ufSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuXG5pbXBvcnQge0NsYXNzTmFtZVVwZ3JhZGVEYXRhfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7XG4gIGlzRXhwb3J0U3BlY2lmaWVyTm9kZSxcbiAgaXNJbXBvcnRTcGVjaWZpZXJOb2RlLFxuICBpc05hbWVzcGFjZUltcG9ydE5vZGUsXG59IGZyb20gJy4uL3R5cGVzY3JpcHQvaW1wb3J0cyc7XG5pbXBvcnQge1xuICBpc01hdGVyaWFsRXhwb3J0RGVjbGFyYXRpb24sXG4gIGlzTWF0ZXJpYWxJbXBvcnREZWNsYXJhdGlvbixcbn0gZnJvbSAnLi4vdHlwZXNjcmlwdC9tb2R1bGUtc3BlY2lmaWVycyc7XG5pbXBvcnQge2dldFZlcnNpb25VcGdyYWRlRGF0YSwgVXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgd2Fsa3MgdGhyb3VnaCBldmVyeSBpZGVudGlmaWVyIHRoYXQgaXMgcGFydCBvZiBBbmd1bGFyIE1hdGVyaWFsIG9yIHRociBDREtcbiAqIGFuZCByZXBsYWNlcyB0aGUgb3V0ZGF0ZWQgbmFtZSB3aXRoIHRoZSBuZXcgb25lIGlmIHNwZWNpZmllZCBpbiB0aGUgdXBncmFkZSBkYXRhLlxuICovXG4vLyBUT0RPOiByZXdvcmsgdGhpcyBydWxlIHRvIGlkZW50aWZ5IHN5bWJvbHMgdXNpbmcgdGhlIGltcG9ydCBpZGVudGlmaWVyIHJlc29sdmVyLiBUaGlzXG4vLyBtYWtlcyBpdCBtb3JlIHJvYnVzdCwgbGVzcyBBU1QgY29udm9sdXRlZCBhbmQgaXMgbW9yZSBUeXBlU2NyaXB0IEFTVCBpZGlvbWF0aWMuIENPTVAtMzAwLlxuZXhwb3J0IGNsYXNzIENsYXNzTmFtZXNNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb248VXBncmFkZURhdGE+IHtcbiAgLyoqIENoYW5nZSBkYXRhIHRoYXQgdXBncmFkZXMgdG8gdGhlIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbi4gKi9cbiAgZGF0YTogQ2xhc3NOYW1lVXBncmFkZURhdGFbXSA9IGdldFZlcnNpb25VcGdyYWRlRGF0YSh0aGlzLCAnY2xhc3NOYW1lcycpO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGlkZW50aWZpZXIgbmFtZXMgdGhhdCBoYXZlIGJlZW4gaW1wb3J0ZWQgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWxgIG9yIGBAYW5ndWxhci9jZGtgXG4gICAqIGluIHRoZSBjdXJyZW50IHNvdXJjZSBmaWxlIGFuZCB0aGVyZWZvcmUgY2FuIGJlIGNvbnNpZGVyZWQgdHJ1c3RlZC5cbiAgICovXG4gIHRydXN0ZWRJZGVudGlmaWVyczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgLyoqIExpc3Qgb2YgbmFtZXNwYWNlcyB0aGF0IGhhdmUgYmVlbiBpbXBvcnRlZCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbGAgb3IgYEBhbmd1bGFyL2Nka2AuICovXG4gIHRydXN0ZWROYW1lc3BhY2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcblxuICAvLyBPbmx5IGVuYWJsZSB0aGUgbWlncmF0aW9uIHJ1bGUgaWYgdGhlcmUgaXMgdXBncmFkZSBkYXRhLlxuICBlbmFibGVkID0gdGhpcy5kYXRhLmxlbmd0aCAhPT0gMDtcblxuICB2aXNpdE5vZGUobm9kZTogdHMuTm9kZSk6IHZvaWQge1xuICAgIGlmICh0cy5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICAgIHRoaXMuX3Zpc2l0SWRlbnRpZmllcihub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWV0aG9kIHRoYXQgaXMgY2FsbGVkIGZvciBldmVyeSBpZGVudGlmaWVyIGluc2lkZSBvZiB0aGUgc3BlY2lmaWVkIHByb2plY3QuICovXG4gIHByaXZhdGUgX3Zpc2l0SWRlbnRpZmllcihpZGVudGlmaWVyOiB0cy5JZGVudGlmaWVyKSB7XG4gICAgLy8gRm9yIGlkZW50aWZpZXJzIHRoYXQgYXJlbid0IGxpc3RlZCBpbiB0aGUgY2xhc3NOYW1lIGRhdGEsIHRoZSB3aG9sZSBjaGVjayBjYW4gYmVcbiAgICAvLyBza2lwcGVkIHNhZmVseS5cbiAgICBpZiAoIXRoaXMuZGF0YS5zb21lKGRhdGEgPT4gZGF0YS5yZXBsYWNlID09PSBpZGVudGlmaWVyLnRleHQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9yIG5hbWVzcGFjZSBpbXBvcnRzIHRoYXQgYXJlIHJlZmVycmluZyB0byBBbmd1bGFyIE1hdGVyaWFsIG9yIHRoZSBDREssIHdlIHN0b3JlIHRoZVxuICAgIC8vIG5hbWVzcGFjZSBuYW1lIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gc2FmZWx5IGZpbmQgaWRlbnRpZmllcnMgdGhhdCBkb24ndCBiZWxvbmcgdG8gdGhlXG4gICAgLy8gZGV2ZWxvcGVyJ3MgYXBwbGljYXRpb24uXG4gICAgaWYgKGlzTmFtZXNwYWNlSW1wb3J0Tm9kZShpZGVudGlmaWVyKSAmJiBpc01hdGVyaWFsSW1wb3J0RGVjbGFyYXRpb24oaWRlbnRpZmllcikpIHtcbiAgICAgIHRoaXMudHJ1c3RlZE5hbWVzcGFjZXMuYWRkKGlkZW50aWZpZXIudGV4dCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVGYWlsdXJlV2l0aFJlcGxhY2VtZW50KGlkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIC8vIEZvciBleHBvcnQgZGVjbGFyYXRpb25zIHRoYXQgYXJlIHJlZmVycmluZyB0byBBbmd1bGFyIE1hdGVyaWFsIG9yIHRoZSBDREssIHRoZSBpZGVudGlmaWVyXG4gICAgLy8gY2FuIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQgdG8gdGhlIG5ldyBuYW1lLlxuICAgIGlmIChpc0V4cG9ydFNwZWNpZmllck5vZGUoaWRlbnRpZmllcikgJiYgaXNNYXRlcmlhbEV4cG9ydERlY2xhcmF0aW9uKGlkZW50aWZpZXIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3JlYXRlRmFpbHVyZVdpdGhSZXBsYWNlbWVudChpZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgaW1wb3J0IGRlY2xhcmF0aW9ucyB0aGF0IGFyZSByZWZlcnJpbmcgdG8gQW5ndWxhciBNYXRlcmlhbCBvciB0aGUgQ0RLLCB0aGUgbmFtZSBvZlxuICAgIC8vIHRoZSBpbXBvcnQgaWRlbnRpZmllcnMuIFRoaXMgYWxsb3dzIHVzIHRvIGlkZW50aWZ5IGlkZW50aWZpZXJzIHRoYXQgYmVsb25nIHRvIE1hdGVyaWFsIGFuZFxuICAgIC8vIHRoZSBDREssIGFuZCB3ZSB3b24ndCBhY2NpZGVudGFsbHkgdG91Y2ggYSBkZXZlbG9wZXIncyBpZGVudGlmaWVyLlxuICAgIGlmIChpc0ltcG9ydFNwZWNpZmllck5vZGUoaWRlbnRpZmllcikgJiYgaXNNYXRlcmlhbEltcG9ydERlY2xhcmF0aW9uKGlkZW50aWZpZXIpKSB7XG4gICAgICB0aGlzLnRydXN0ZWRJZGVudGlmaWVycy5hZGQoaWRlbnRpZmllci50ZXh0KTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZhaWx1cmVXaXRoUmVwbGFjZW1lbnQoaWRlbnRpZmllcik7XG4gICAgfVxuXG4gICAgLy8gSW4gY2FzZSB0aGUgaWRlbnRpZmllciBpcyBwYXJ0IG9mIGEgcHJvcGVydHkgYWNjZXNzIGV4cHJlc3Npb24sIHdlIG5lZWQgdG8gdmVyaWZ5IHRoYXQgdGhlXG4gICAgLy8gcHJvcGVydHkgYWNjZXNzIG9yaWdpbmF0ZXMgZnJvbSBhIG5hbWVzcGFjZSB0aGF0IGhhcyBiZWVuIGltcG9ydGVkIGZyb20gTWF0ZXJpYWwgb3IgdGhlIENESy5cbiAgICBpZiAodHMuaXNQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oaWRlbnRpZmllci5wYXJlbnQpKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uID0gaWRlbnRpZmllci5wYXJlbnQuZXhwcmVzc2lvbjtcblxuICAgICAgaWYgKHRzLmlzSWRlbnRpZmllcihleHByZXNzaW9uKSAmJiB0aGlzLnRydXN0ZWROYW1lc3BhY2VzLmhhcyhleHByZXNzaW9uLnRleHQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVGYWlsdXJlV2l0aFJlcGxhY2VtZW50KGlkZW50aWZpZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50cnVzdGVkSWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIudGV4dCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVGYWlsdXJlV2l0aFJlcGxhY2VtZW50KGlkZW50aWZpZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgZmFpbHVyZSBhbmQgcmVwbGFjZW1lbnQgZm9yIHRoZSBzcGVjaWZpZWQgaWRlbnRpZmllci4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlRmFpbHVyZVdpdGhSZXBsYWNlbWVudChpZGVudGlmaWVyOiB0cy5JZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY2xhc3NEYXRhID0gdGhpcy5kYXRhLmZpbmQoZGF0YSA9PiBkYXRhLnJlcGxhY2UgPT09IGlkZW50aWZpZXIudGV4dCkhO1xuXG4gICAgdGhpcy5maWxlU3lzdGVtLmVkaXQoaWRlbnRpZmllci5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWUpXG4gICAgICAucmVtb3ZlKGlkZW50aWZpZXIuZ2V0U3RhcnQoKSwgaWRlbnRpZmllci5nZXRXaWR0aCgpKVxuICAgICAgLmluc2VydFJpZ2h0KGlkZW50aWZpZXIuZ2V0U3RhcnQoKSwgY2xhc3NEYXRhLnJlcGxhY2VXaXRoKTtcbiAgfVxufVxuIl19