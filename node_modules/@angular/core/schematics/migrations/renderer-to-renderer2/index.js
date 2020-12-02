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
        define("@angular/core/schematics/migrations/renderer-to-renderer2", ["require", "exports", "@angular-devkit/schematics", "path", "typescript", "@angular/core/schematics/utils/project_tsconfig_paths", "@angular/core/schematics/utils/typescript/compiler_host", "@angular/core/schematics/migrations/renderer-to-renderer2/helpers", "@angular/core/schematics/migrations/renderer-to-renderer2/migration", "@angular/core/schematics/migrations/renderer-to-renderer2/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const path_1 = require("path");
    const ts = require("typescript");
    const project_tsconfig_paths_1 = require("@angular/core/schematics/utils/project_tsconfig_paths");
    const compiler_host_1 = require("@angular/core/schematics/utils/typescript/compiler_host");
    const helpers_1 = require("@angular/core/schematics/migrations/renderer-to-renderer2/helpers");
    const migration_1 = require("@angular/core/schematics/migrations/renderer-to-renderer2/migration");
    const util_1 = require("@angular/core/schematics/migrations/renderer-to-renderer2/util");
    const MODULE_AUGMENTATION_FILENAME = 'ɵɵRENDERER_MIGRATION_CORE_AUGMENTATION.d.ts';
    /**
     * Migration that switches from `Renderer` to `Renderer2`. More information on how it works:
     * https://hackmd.angular.io/UTzUZTnPRA-cSa_4mHyfYw
     */
    function default_1() {
        return (tree) => {
            const { buildPaths, testPaths } = project_tsconfig_paths_1.getProjectTsConfigPaths(tree);
            const basePath = process.cwd();
            const allPaths = [...buildPaths, ...testPaths];
            if (!allPaths.length) {
                throw new schematics_1.SchematicsException('Could not find any tsconfig file. Cannot migrate Renderer usages to Renderer2.');
            }
            for (const tsconfigPath of allPaths) {
                runRendererToRenderer2Migration(tree, tsconfigPath, basePath);
            }
        };
    }
    exports.default = default_1;
    function runRendererToRenderer2Migration(tree, tsconfigPath, basePath) {
        const { program } = compiler_host_1.createMigrationProgram(tree, tsconfigPath, basePath, fileName => {
            // In case the module augmentation file has been requested, we return a source file that
            // augments "@angular/core" to include a named export called "Renderer". This ensures that
            // we can rely on the type checker for this migration in v9 where "Renderer" has been removed.
            if (fileName === MODULE_AUGMENTATION_FILENAME) {
                return `
        import '@angular/core';
        declare module "@angular/core" {
          class Renderer {}
        }
      `;
            }
            return null;
        }, [MODULE_AUGMENTATION_FILENAME]);
        const typeChecker = program.getTypeChecker();
        const printer = ts.createPrinter();
        const sourceFiles = program.getSourceFiles().filter(f => !f.isDeclarationFile && !program.isSourceFileFromExternalLibrary(f));
        sourceFiles.forEach(sourceFile => {
            const rendererImport = util_1.findCoreImport(sourceFile, 'Renderer');
            // If there are no imports for the `Renderer`, we can exit early.
            if (!rendererImport) {
                return;
            }
            const { typedNodes, methodCalls, forwardRefs } = util_1.findRendererReferences(sourceFile, typeChecker, rendererImport);
            const update = tree.beginUpdate(path_1.relative(basePath, sourceFile.fileName));
            const helpersToAdd = new Set();
            // Change the `Renderer` import to `Renderer2`.
            update.remove(rendererImport.getStart(), rendererImport.getWidth());
            update.insertRight(rendererImport.getStart(), printer.printNode(ts.EmitHint.Unspecified, migration_1.replaceImport(rendererImport, 'Renderer', 'Renderer2'), sourceFile));
            // Change the method parameter and property types to `Renderer2`.
            typedNodes.forEach(node => {
                const type = node.type;
                if (type) {
                    update.remove(type.getStart(), type.getWidth());
                    update.insertRight(type.getStart(), 'Renderer2');
                }
            });
            // Change all identifiers inside `forwardRef` referring to the `Renderer`.
            forwardRefs.forEach(identifier => {
                update.remove(identifier.getStart(), identifier.getWidth());
                update.insertRight(identifier.getStart(), 'Renderer2');
            });
            // Migrate all of the method calls.
            methodCalls.forEach(call => {
                const { node, requiredHelpers } = migration_1.migrateExpression(call, typeChecker);
                if (node) {
                    // If we migrated the node to a new expression, replace only the call expression.
                    update.remove(call.getStart(), call.getWidth());
                    update.insertRight(call.getStart(), printer.printNode(ts.EmitHint.Unspecified, node, sourceFile));
                }
                else if (call.parent && ts.isExpressionStatement(call.parent)) {
                    // Otherwise if the call is inside an expression statement, drop the entire statement.
                    // This takes care of any trailing semicolons. We only need to drop nodes for cases like
                    // `setBindingDebugInfo` which have been noop for a while so they can be removed safely.
                    update.remove(call.parent.getStart(), call.parent.getWidth());
                }
                if (requiredHelpers) {
                    requiredHelpers.forEach(helperName => helpersToAdd.add(helperName));
                }
            });
            // Some of the methods can't be mapped directly to `Renderer2` and need extra logic around them.
            // The safest way to do so is to declare helper functions similar to the ones emitted by TS
            // which encapsulate the extra "glue" logic. We should only emit these functions once per file.
            helpersToAdd.forEach(helperName => {
                update.insertLeft(sourceFile.endOfFileToken.getStart(), helpers_1.getHelper(helperName, sourceFile, printer));
            });
            tree.commitUpdate(update);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NjaGVtYXRpY3MvbWlncmF0aW9ucy9yZW5kZXJlci10by1yZW5kZXJlcjIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwyREFBMkU7SUFDM0UsK0JBQThCO0lBQzlCLGlDQUFpQztJQUVqQyxrR0FBMkU7SUFDM0UsMkZBQTRFO0lBRTVFLCtGQUFvRDtJQUNwRCxtR0FBNkQ7SUFDN0QseUZBQThEO0lBRTlELE1BQU0sNEJBQTRCLEdBQUcsNkNBQTZDLENBQUM7SUFFbkY7OztPQUdHO0lBQ0g7UUFDRSxPQUFPLENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDcEIsTUFBTSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsR0FBRyxnREFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0IsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRS9DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNwQixNQUFNLElBQUksZ0NBQW1CLENBQ3pCLGdGQUFnRixDQUFDLENBQUM7YUFDdkY7WUFFRCxLQUFLLE1BQU0sWUFBWSxJQUFJLFFBQVEsRUFBRTtnQkFDbkMsK0JBQStCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFmRCw0QkFlQztJQUVELFNBQVMsK0JBQStCLENBQUMsSUFBVSxFQUFFLFlBQW9CLEVBQUUsUUFBZ0I7UUFDekYsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLHNDQUFzQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxF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RUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNoRCxNQUFNLENBQUMsV0FBVyxDQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUNwRjtxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDL0Qsc0ZBQXNGO29CQUN0Rix3RkFBd0Y7b0JBQ3hGLHdGQUF3RjtvQkFDeEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDL0Q7Z0JBRUQsSUFBSSxlQUFlLEVBQUU7b0JBQ25CLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxnR0FBZ0c7WUFDaEcsMkZBQTJGO1lBQzNGLCtGQUErRjtZQUMvRixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLENBQUMsVUFBVSxDQUNiLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEVBQUUsbUJBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEYsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtSdWxlLCBTY2hlbWF0aWNzRXhjZXB0aW9uLCBUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge3JlbGF0aXZlfSBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2dldFByb2plY3RUc0NvbmZpZ1BhdGhzfSBmcm9tICcuLi8uLi91dGlscy9wcm9qZWN0X3RzY29uZmlnX3BhdGhzJztcbmltcG9ydCB7Y3JlYXRlTWlncmF0aW9uUHJvZ3JhbX0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNjcmlwdC9jb21waWxlcl9ob3N0JztcblxuaW1wb3J0IHtnZXRIZWxwZXIsIEhlbHBlckZ1bmN0aW9ufSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHttaWdyYXRlRXhwcmVzc2lvbiwgcmVwbGFjZUltcG9ydH0gZnJvbSAnLi9taWdyYXRpb24nO1xuaW1wb3J0IHtmaW5kQ29yZUltcG9ydCwgZmluZFJlbmRlcmVyUmVmZXJlbmNlc30gZnJvbSAnLi91dGlsJztcblxuY29uc3QgTU9EVUxFX0FVR01FTlRBVElPTl9GSUxFTkFNRSA9ICfJtcm1UkVOREVSRVJfTUlHUkFUSU9OX0NPUkVfQVVHTUVOVEFUSU9OLmQudHMnO1xuXG4vKipcbiAqIE1pZ3JhdGlvbiB0aGF0IHN3aXRjaGVzIGZyb20gYFJlbmRlcmVyYCB0byBgUmVuZGVyZXIyYC4gTW9yZSBpbmZvcm1hdGlvbiBvbiBob3cgaXQgd29ya3M6XG4gKiBodHRwczovL2hhY2ttZC5hbmd1bGFyLmlvL1VUelVaVG5QUkEtY1NhXzRtSHlmWXdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKTogUnVsZSB7XG4gIHJldHVybiAodHJlZTogVHJlZSkgPT4ge1xuICAgIGNvbnN0IHtidWlsZFBhdGhzLCB0ZXN0UGF0aHN9ID0gZ2V0UHJvamVjdFRzQ29uZmlnUGF0aHModHJlZSk7XG4gICAgY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGFsbFBhdGhzID0gWy4uLmJ1aWxkUGF0aHMsIC4uLnRlc3RQYXRoc107XG5cbiAgICBpZiAoIWFsbFBhdGhzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oXG4gICAgICAgICAgJ0NvdWxkIG5vdCBmaW5kIGFueSB0c2NvbmZpZyBmaWxlLiBDYW5ub3QgbWlncmF0ZSBSZW5kZXJlciB1c2FnZXMgdG8gUmVuZGVyZXIyLicpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdHNjb25maWdQYXRoIG9mIGFsbFBhdGhzKSB7XG4gICAgICBydW5SZW5kZXJlclRvUmVuZGVyZXIyTWlncmF0aW9uKHRyZWUsIHRzY29uZmlnUGF0aCwgYmFzZVBhdGgpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVuUmVuZGVyZXJUb1JlbmRlcmVyMk1pZ3JhdGlvbih0cmVlOiBUcmVlLCB0c2NvbmZpZ1BhdGg6IHN0cmluZywgYmFzZVBhdGg6IHN0cmluZykge1xuICBjb25zdCB7cHJvZ3JhbX0gPSBjcmVhdGVNaWdyYXRpb25Qcm9ncmFtKHRyZWUsIHRzY29uZmlnUGF0aCwgYmFzZVBhdGgsIGZpbGVOYW1lID0+IHtcbiAgICAvLyBJbiBjYXNlIHRoZSBtb2R1bGUgYXVnbWVudGF0aW9uIGZpbGUgaGFzIGJlZW4gcmVxdWVzdGVkLCB3ZSByZXR1cm4gYSBzb3VyY2UgZmlsZSB0aGF0XG4gICAgLy8gYXVnbWVudHMgXCJAYW5ndWxhci9jb3JlXCIgdG8gaW5jbHVkZSBhIG5hbWVkIGV4cG9ydCBjYWxsZWQgXCJSZW5kZXJlclwiLiBUaGlzIGVuc3VyZXMgdGhhdFxuICAgIC8vIHdlIGNhbiByZWx5IG9uIHRoZSB0eXBlIGNoZWNrZXIgZm9yIHRoaXMgbWlncmF0aW9uIGluIHY5IHdoZXJlIFwiUmVuZGVyZXJcIiBoYXMgYmVlbiByZW1vdmVkLlxuICAgIGlmIChmaWxlTmFtZSA9PT0gTU9EVUxFX0FVR01FTlRBVElPTl9GSUxFTkFNRSkge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgaW1wb3J0ICdAYW5ndWxhci9jb3JlJztcbiAgICAgICAgZGVjbGFyZSBtb2R1bGUgXCJAYW5ndWxhci9jb3JlXCIge1xuICAgICAgICAgIGNsYXNzIFJlbmRlcmVyIHt9XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LCBbTU9EVUxFX0FVR01FTlRBVElPTl9GSUxFTkFNRV0pO1xuICBjb25zdCB0eXBlQ2hlY2tlciA9IHByb2dyYW0uZ2V0VHlwZUNoZWNrZXIoKTtcbiAgY29uc3QgcHJpbnRlciA9IHRzLmNyZWF0ZVByaW50ZXIoKTtcbiAgY29uc3Qgc291cmNlRmlsZXMgPSBwcm9ncmFtLmdldFNvdXJjZUZpbGVzKCkuZmlsdGVyKFxuICAgICAgZiA9PiAhZi5pc0RlY2xhcmF0aW9uRmlsZSAmJiAhcHJvZ3JhbS5pc1NvdXJjZUZpbGVGcm9tRXh0ZXJuYWxMaWJyYXJ5KGYpKTtcblxuICBzb3VyY2VGaWxlcy5mb3JFYWNoKHNvdXJjZUZpbGUgPT4ge1xuICAgIGNvbnN0IHJlbmRlcmVySW1wb3J0ID0gZmluZENvcmVJbXBvcnQoc291cmNlRmlsZSwgJ1JlbmRlcmVyJyk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaW1wb3J0cyBmb3IgdGhlIGBSZW5kZXJlcmAsIHdlIGNhbiBleGl0IGVhcmx5LlxuICAgIGlmICghcmVuZGVyZXJJbXBvcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7dHlwZWROb2RlcywgbWV0aG9kQ2FsbHMsIGZvcndhcmRSZWZzfSA9XG4gICAgICAgIGZpbmRSZW5kZXJlclJlZmVyZW5jZXMoc291cmNlRmlsZSwgdHlwZUNoZWNrZXIsIHJlbmRlcmVySW1wb3J0KTtcbiAgICBjb25zdCB1cGRhdGUgPSB0cmVlLmJlZ2luVXBkYXRlKHJlbGF0aXZlKGJhc2VQYXRoLCBzb3VyY2VGaWxlLmZpbGVOYW1lKSk7XG4gICAgY29uc3QgaGVscGVyc1RvQWRkID0gbmV3IFNldDxIZWxwZXJGdW5jdGlvbj4oKTtcblxuICAgIC8vIENoYW5nZSB0aGUgYFJlbmRlcmVyYCBpbXBvcnQgdG8gYFJlbmRlcmVyMmAuXG4gICAgdXBkYXRlLnJlbW92ZShyZW5kZXJlckltcG9ydC5nZXRTdGFydCgpLCByZW5kZXJlckltcG9ydC5nZXRXaWR0aCgpKTtcbiAgICB1cGRhdGUuaW5zZXJ0UmlnaHQoXG4gICAgICAgIHJlbmRlcmVySW1wb3J0LmdldFN0YXJ0KCksXG4gICAgICAgIHByaW50ZXIucHJpbnROb2RlKFxuICAgICAgICAgICAgdHMuRW1pdEhpbnQuVW5zcGVjaWZpZWQsIHJlcGxhY2VJbXBvcnQocmVuZGVyZXJJbXBvcnQsICdSZW5kZXJlcicsICdSZW5kZXJlcjInKSxcbiAgICAgICAgICAgIHNvdXJjZUZpbGUpKTtcblxuICAgIC8vIENoYW5nZSB0aGUgbWV0aG9kIHBhcmFtZXRlciBhbmQgcHJvcGVydHkgdHlwZXMgdG8gYFJlbmRlcmVyMmAuXG4gICAgdHlwZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IG5vZGUudHlwZTtcblxuICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgdXBkYXRlLnJlbW92ZSh0eXBlLmdldFN0YXJ0KCksIHR5cGUuZ2V0V2lkdGgoKSk7XG4gICAgICAgIHVwZGF0ZS5pbnNlcnRSaWdodCh0eXBlLmdldFN0YXJ0KCksICdSZW5kZXJlcjInKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSBhbGwgaWRlbnRpZmllcnMgaW5zaWRlIGBmb3J3YXJkUmVmYCByZWZlcnJpbmcgdG8gdGhlIGBSZW5kZXJlcmAuXG4gICAgZm9yd2FyZFJlZnMuZm9yRWFjaChpZGVudGlmaWVyID0+IHtcbiAgICAgIHVwZGF0ZS5yZW1vdmUoaWRlbnRpZmllci5nZXRTdGFydCgpLCBpZGVudGlmaWVyLmdldFdpZHRoKCkpO1xuICAgICAgdXBkYXRlLmluc2VydFJpZ2h0KGlkZW50aWZpZXIuZ2V0U3RhcnQoKSwgJ1JlbmRlcmVyMicpO1xuICAgIH0pO1xuXG4gICAgLy8gTWlncmF0ZSBhbGwgb2YgdGhlIG1ldGhvZCBjYWxscy5cbiAgICBtZXRob2RDYWxscy5mb3JFYWNoKGNhbGwgPT4ge1xuICAgICAgY29uc3Qge25vZGUsIHJlcXVpcmVkSGVscGVyc30gPSBtaWdyYXRlRXhwcmVzc2lvbihjYWxsLCB0eXBlQ2hlY2tlcik7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIC8vIElmIHdlIG1pZ3JhdGVkIHRoZSBub2RlIHRvIGEgbmV3IGV4cHJlc3Npb24sIHJlcGxhY2Ugb25seSB0aGUgY2FsbCBleHByZXNzaW9uLlxuICAgICAgICB1cGRhdGUucmVtb3ZlKGNhbGwuZ2V0U3RhcnQoKSwgY2FsbC5nZXRXaWR0aCgpKTtcbiAgICAgICAgdXBkYXRlLmluc2VydFJpZ2h0KFxuICAgICAgICAgICAgY2FsbC5nZXRTdGFydCgpLCBwcmludGVyLnByaW50Tm9kZSh0cy5FbWl0SGludC5VbnNwZWNpZmllZCwgbm9kZSwgc291cmNlRmlsZSkpO1xuICAgICAgfSBlbHNlIGlmIChjYWxsLnBhcmVudCAmJiB0cy5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoY2FsbC5wYXJlbnQpKSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBpZiB0aGUgY2FsbCBpcyBpbnNpZGUgYW4gZXhwcmVzc2lvbiBzdGF0ZW1lbnQsIGRyb3AgdGhlIGVudGlyZSBzdGF0ZW1lbnQuXG4gICAgICAgIC8vIFRoaXMgdGFrZXMgY2FyZSBvZiBhbnkgdHJhaWxpbmcgc2VtaWNvbG9ucy4gV2Ugb25seSBuZWVkIHRvIGRyb3Agbm9kZXMgZm9yIGNhc2VzIGxpa2VcbiAgICAgICAgLy8gYHNldEJpbmRpbmdEZWJ1Z0luZm9gIHdoaWNoIGhhdmUgYmVlbiBub29wIGZvciBhIHdoaWxlIHNvIHRoZXkgY2FuIGJlIHJlbW92ZWQgc2FmZWx5LlxuICAgICAgICB1cGRhdGUucmVtb3ZlKGNhbGwucGFyZW50LmdldFN0YXJ0KCksIGNhbGwucGFyZW50LmdldFdpZHRoKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWlyZWRIZWxwZXJzKSB7XG4gICAgICAgIHJlcXVpcmVkSGVscGVycy5mb3JFYWNoKGhlbHBlck5hbWUgPT4gaGVscGVyc1RvQWRkLmFkZChoZWxwZXJOYW1lKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTb21lIG9mIHRoZSBtZXRob2RzIGNhbid0IGJlIG1hcHBlZCBkaXJlY3RseSB0byBgUmVuZGVyZXIyYCBhbmQgbmVlZCBleHRyYSBsb2dpYyBhcm91bmQgdGhlbS5cbiAgICAvLyBUaGUgc2FmZXN0IHdheSB0byBkbyBzbyBpcyB0byBkZWNsYXJlIGhlbHBlciBmdW5jdGlvbnMgc2ltaWxhciB0byB0aGUgb25lcyBlbWl0dGVkIGJ5IFRTXG4gICAgLy8gd2hpY2ggZW5jYXBzdWxhdGUgdGhlIGV4dHJhIFwiZ2x1ZVwiIGxvZ2ljLiBXZSBzaG91bGQgb25seSBlbWl0IHRoZXNlIGZ1bmN0aW9ucyBvbmNlIHBlciBmaWxlLlxuICAgIGhlbHBlcnNUb0FkZC5mb3JFYWNoKGhlbHBlck5hbWUgPT4ge1xuICAgICAgdXBkYXRlLmluc2VydExlZnQoXG4gICAgICAgICAgc291cmNlRmlsZS5lbmRPZkZpbGVUb2tlbi5nZXRTdGFydCgpLCBnZXRIZWxwZXIoaGVscGVyTmFtZSwgc291cmNlRmlsZSwgcHJpbnRlcikpO1xuICAgIH0pO1xuXG4gICAgdHJlZS5jb21taXRVcGRhdGUodXBkYXRlKTtcbiAgfSk7XG59XG4iXX0=